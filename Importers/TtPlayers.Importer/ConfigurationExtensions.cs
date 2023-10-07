using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer
{
    public static class ConfigurationExtensions
    {
        public static void ConfigureHostConfiguration(this IConfigurationBuilder configBuilder)
        {
            configBuilder.SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("hostsettings.json", optional: true).AddEnvironmentVariables();
        }

        public static void ConfigureAppConfiguration(this IConfigurationBuilder configBuilder, IHostEnvironment hostingEnvironment)
        {
            configBuilder.SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json", optional: false, reloadOnChange: true).AddJsonFile("appsettings." + hostingEnvironment.EnvironmentName + ".json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
        }
    }
}
