using AutoMapper;
using Google.Cloud.Firestore.V1;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Applications;
using TtPlayers.Importer.Applications.Scraper;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer
{
    public static class DiConfigurationExtensions
    {
        public static void UseImporter(this IServiceCollection services)
        {
            var serviceProvider = services.BuildServiceProvider();
            var configuration = serviceProvider.GetRequiredService<IConfiguration>();

            services.Configure<MongoDbSettings>(configuration.GetSection("MongoDbSettings"));
            services.Configure<SndttaSettings>(configuration.GetSection("SndttaSettings"));
            services.Configure<FireStoreSettings>(configuration.GetSection("FireStoreSettings"));

            services.AddSingleton(resolver => resolver.GetRequiredService<IOptions<MongoDbSettings>>().Value);
            services.AddSingleton(resolver => resolver.GetRequiredService<IOptions<SndttaSettings>>().Value);
            services.AddSingleton(resolver => resolver.GetRequiredService<IOptions<FireStoreSettings>>().Value);

            services.AddSingleton<IHttpDownloader, HttpDownloader>();

            //Mongo & Repositories
            services.AddSingleton<IMongoClient>(s =>
            {
                var settings = s.GetService<MongoDbSettings>();
                return new MongoClient(settings.ConnectionString);
            });
            
            services.AddTransient(typeof(IDocumentRepository<>), typeof(MongoDbRepository<>));

            //AutoMapper
            services.AddSingleton(_ => new MapperConfiguration(cfg =>
            {
                //cfg.AddProfile<CurrentSalesDataAutoMappingProfile>();
                //cfg.AddProfile<SuburbAutoMappingProfile>();
            }));

            services.AddTransient<IMapper>(s =>
            {
                var config = s.GetService<MapperConfiguration>();
                return config.CreateMapper();
            });

            //Services
            services.AddTransient<IRatingCentralPlayersImporter, RatingCentralPlayersImporter>();
            services.AddTransient<IRatingCentralEventsImporter, RatingCentralEventsImporter>();
            services.AddTransient<IRatingCentralPlayerHistoryImporter, RatingCentralPlayerHistoryImporter>();
            services.AddTransient<ISndttaUpcomingEventImporter, SndttaUpcomingEventImporter>();
            services.AddTransient(typeof(IFireBaseRepository<>), typeof(FireBaseRepository<>));
            services.AddTransient(typeof(ICsvService<,>), typeof(CsvService<,>));
            services.AddTransient<IFirebaseDeltaPushImporter, FirebaseDeltaPushImporter>();
            services.AddTransient<IRatingCentralMatchTransformer, RatingCentralMatchTransformer>();
            services.AddTransient<ISndttaPlayerScraper, SndttaPlayerScraper>();
            services.AddTransient<IRatingCentralClubImporter, RatingCentralClubImporter>();
            services.AddTransient<IRatingCentralScraper, RatingCentralScraper>();
            services.AddTransient<IStatisticsImporter, StatisticsImporter>();
            services.AddTransient<IGoogleSiteMapGenerator, GoogleSiteMapGenerator>();
            services.AddTransient<IRatingCentralEventReviser, RatingCentralEventReviser>();
        }
    }
}
