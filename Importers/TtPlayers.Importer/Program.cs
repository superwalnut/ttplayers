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

            [Option('h', "history", Required = false, HelpText = "Import player histories.")]
            public bool SndttaPlayerHistoryImport { get; set; }

            [Option('e', "event", Required = false, HelpText = "Import tt events.")]
            public bool EventImport { get; set; }

            [Option('m', "match", Required = false, HelpText = "Import tt event matches.")]
            public bool EventMatchesImport { get; set; }

            [Option('t', "transform-match", Required = false, HelpText = "Transform tt matches.")]
            public bool EventMatchesTransform { get; set; }

            [Option('s', "sndtta-player", Required = false, HelpText = "Import sndtta players.")]
            public bool SndttaPlayerImport { get; set; }

            [Option('u', "sndtta-upcoming", Required = false, HelpText = "Import sndtta upcoming events.")]
            public bool SndttaUpcomingEvent { get; set; }

            [Option("push-player", Required = false, HelpText = "Push players.")]
            public bool PushPlayers { get; set; }

            [Option("push-player-history", Required = false, HelpText = "Push player history.")]
            public bool PushPlayerHistory { get; set; }

            [Option("push-event", Required = false, HelpText = "Push events.")]
            public bool PushEvent { get; set; }

            [Option("push-match", Required = false, HelpText = "Push event matches.")]
            public bool PushEventMatches { get; set; }

            [Option("push-sndtta-team", Required = false, HelpText = "Push sndtta team.")]
            public bool PushSndttaTeam { get; set; }

            [Option("push-sndtta-upcoming", Required = false, HelpText = "Push sndtta upcoming events.")]
            public bool PushSndttaUpcoming { get; set; }
        }

        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration().CreateLogger();
            var host = CreateHostBuilder(args).Build();

            
            var playerImporter = host.Services.GetRequiredService<IRatingCentralPlayersImporter>();
            var sndttaPlayerImporter = host.Services.GetRequiredService<ISndttaPlayerImporters>();
            var eventImporter = host.Services.GetRequiredService<IRatingCentralEventsImporter>();
            var matchTransformer = host.Services.GetRequiredService<IRatingCentralMatchTransformer>();
            var playerHistoryImporter = host.Services.GetRequiredService<IRatingCentralPlayerHistoryImporter>();
            var sndttaUpcomingEventImporter = host.Services.GetRequiredService<ISndttaUpcomingEventImporter>();

            var firebasePusher = host.Services.GetRequiredService<IFirebaseDeltaPushImporter>();

            try
            {
                Parser.Default.ParseArguments<Options>(args)
                   .WithParsed<Options>(o =>
                   {
                       if (o.PlayerImport)
                       {
                           // players need to be updated regularly
                           playerImporter.Import().GetAwaiter().GetResult();
                       } 
                       else if(o.SndttaPlayerImport)
                       {
                           // sndtta players need to be updated regularly after playersImport
                           sndttaPlayerImporter.Import().GetAwaiter().GetResult();
                       }
                       else if (o.SndttaPlayerHistoryImport)
                       {
                           // sndtta players need to be updated regularly after sndtta players import
                           playerHistoryImporter.Import().GetAwaiter().GetResult();
                       }
                       else if (o.EventImport)
                       {
                           // events need to be updated regularly only refresh the new events
                           eventImporter.ImportEvents().GetAwaiter().GetResult();
                       }
                       else if (o.EventMatchesImport)
                       {
                           // events matches need to be updated after new events import
                           eventImporter.ImportEventMatches().GetAwaiter().GetResult();
                       }
                       else if (o.EventMatchesTransform)
                       {
                           matchTransformer.TransformMatches().GetAwaiter().GetResult();
                       }
                       else if(o.SndttaUpcomingEvent)
                       {
                           // sndtta events only need to be updated once per season
                           sndttaUpcomingEventImporter.Import().GetAwaiter().GetResult();
                       }
                       else if(o.PushPlayers)
                       {
                           firebasePusher.PushPlayers().GetAwaiter().GetResult();
                       }
                       else if(o.PushPlayerHistory)
                       {
                           firebasePusher.PushPlayerHistories().GetAwaiter().GetResult();
                       }
                       else if(o.PushEvent)
                       {
                           firebasePusher.PushEvents().GetAwaiter().GetResult();
                       }
                       else if(o.PushEventMatches)
                       {
                           firebasePusher.PushEventMatches().GetAwaiter().GetResult();
                       }
                       else if (o.PushSndttaTeam)
                       {
                           firebasePusher.PushSndttaTeams().GetAwaiter().GetResult();
                       }
                       else if(o.PushSndttaUpcoming)
                       {
                           firebasePusher.PushSndttaUpcomingEvents().GetAwaiter().GetResult();
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