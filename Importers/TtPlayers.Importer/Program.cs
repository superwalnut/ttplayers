using CommandLine;
using CsvHelper;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Serilog;
using TtPlayers.Importer.Applications;

namespace TtPlayers.Importer
{
    internal class Program
    {
        public class Options
        {
            [Option('p', "player", Required = false, HelpText = "Import players.")]
            public bool PlayerImport { get; set; }

            [Option('s', "sndtta-player", Required = false, HelpText = "Import sndtta players.")]
            public bool SndttaPlayerImport { get; set; }

            [Option('h', "history", Required = false, HelpText = "Import player histories.")]
            public bool SndttaPlayerHistoryImport { get; set; }

            [Option('e', "event", Required = false, HelpText = "Import tt events.")]
            public bool EventImport { get; set; }

            [Option('u', "event-summary", Required = false, HelpText = "Import tt events player-summary.")]
            public bool EventSummaryImport { get; set; }

            [Option('m', "event-matches", Required = false, HelpText = "Import tt event matches.")]
            public bool EventMatchesImport { get; set; }

        }

        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration().CreateLogger();
            var host = CreateHostBuilder(args).Build();

            
            var playerImporter = host.Services.GetRequiredService<IRatingCentralPlayersImporter>();
            var sndttaPlayerImporter = host.Services.GetRequiredService<ISndttaPlayerImporters>();

            var eventImporter = host.Services.GetRequiredService<IRatingCentralEventsImporter>();
            var playerHistoryImporter = host.Services.GetRequiredService<IRatingCentralPlayerHistoryImporter>();
            try
            {
                Parser.Default.ParseArguments<Options>(args)
                   .WithParsed<Options>(o =>
                   {
                       if (o.PlayerImport)
                       {
                           playerImporter.Import().GetAwaiter().GetResult();
                       } 
                       else if(o.SndttaPlayerImport)
                       {
                           sndttaPlayerImporter.Import().GetAwaiter().GetResult();
                       }
                       else if (o.SndttaPlayerHistoryImport)
                       {
                           playerHistoryImporter.Import().GetAwaiter().GetResult();
                       }
                       else if (o.EventImport)
                       {
                           eventImporter.ImportEvents().GetAwaiter().GetResult();
                       }
                       else if(o.EventSummaryImport)
                       {
                           eventImporter.ImportEventSummaries().GetAwaiter().GetResult();
                       }
                       else if (o.EventMatchesImport)
                       {
                           eventImporter.ImportEventMatches().GetAwaiter().GetResult();
                       }
                       else
                       {
                           Console.WriteLine("no parameter is selected");
                       }
                   });
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.Message);
            }

            System.Console.WriteLine("Finished everything");
        }

        static IHostBuilder CreateHostBuilder(string[] args) => 
            Host.CreateDefaultBuilder(args)
                .ConfigureHostConfiguration(configBuilder =>
                {
                    configBuilder.ConfigureHostConfiguration();
                })
                .ConfigureAppConfiguration((hostContext, configBuilder) =>
                {
                    configBuilder.ConfigureAppConfiguration(hostContext.HostingEnvironment);
                })
                .ConfigureServices((hostContext, services) =>
                {
                    services.UseImporter();
                })
                .UseSerilog((hostingContext, loggerConfiguration) => loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration))
                .UseConsoleLifetime();
    }
}