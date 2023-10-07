using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using TtPlayers.Importer.Applications;

namespace TtPlayers.Importer
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration().CreateLogger();
            var host = CreateHostBuilder(args).Build();
            var playerImporter = host.Services.GetRequiredService<ISndttaPlayerImporters>();

            try
            {
                playerImporter.Import().GetAwaiter().GetResult();
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