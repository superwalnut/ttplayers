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
            // import all
            [Option('a', "all", Required = false, HelpText = "Import all.")]
            public bool AllImport { get; set; }

            // parameters
            [Option("player-id", Required = false, HelpText = "Only apply to player xxx.")]
            public string PlayerId { get; set; }

            [Option("count", Required = false, HelpText = "Only apply to number of items.")]
            public int? ActionCount { get; set; }

            [Option("force-all", Required = false, HelpText = "force to apply to all!.")]
            public bool ForceAll { get; set; } = false;

            [Option("event-id", Required = false, HelpText = "Only apply to event xxx.")]
            public string EventId { get; set; }

            [Option("ytd", Required = false, HelpText = "Only apply to ytd items.")]
            public bool Ytd { get; set; }

            // import by actions

            [Option('p', "player", Required = false, HelpText = "Import players.")]
            public bool PlayerImport { get; set; }

            [Option('h', "history", Required = false, HelpText = "Import player histories.")]
            public bool SndttaPlayerHistoryImport { get; set; }

            [Option('e', "event", Required = false, HelpText = "Import tt events.")]
            public bool EventImport { get; set; }

            [Option("revise-event", Required = false, HelpText = "Revise and Re-Import tt events.")]
            public bool ReviseEvent { get; set; }

            [Option('m', "event-match", Required = false, HelpText = "Import tt event matches.")]
            public bool EventMatchesImport { get; set; }

            [Option('c', "club", Required = false, HelpText = "Import clubs.")]
            public bool ClubImport { get; set; }

            [Option('t', "transform-match", Required = false, HelpText = "Transform tt matches.")]
            public bool EventMatchesTransform { get; set; }

            [Option('u', "sndtta-upcoming", Required = false, HelpText = "Import sndtta upcoming events.")]
            public bool SndttaUpcomingEvent { get; set; }

            [Option("event-player", Required = false, HelpText = "Import event players.")]
            public bool EventPlayerImport { get; set; }

            [Option("event-refresh-match-player-count", Required = false, HelpText = "Recount event matches and players.")]
            public bool CountEventMatchAndPlayer { get; set; }

            [Option("event-player-refresh-gender", Required = false, HelpText = "Refresh event players genders.")]
            public bool Refresh_Gender_EventPlayers { get; set; }

            [Option("event-player-refresh-eventdate", Required = false, HelpText = "Refresh event players event date.")]
            public bool Refresh_EventDate_EventPlayers { get; set; }
            
            [Option("player-summary", Required = false, HelpText = "Import player summary.")]
            public bool PlayerSummaryImport { get; set; }
            
            [Option("player-ranking", Required = false, HelpText = "Import player ranking.")]
            public bool PlayerRankingImport { get; set; }

            [Option("player-sndtta-team", Required = false, HelpText = "Import player sndtta teams.")]
            public bool PlayerSndttaTeamImport { get; set; }

            [Option("player-refresh-clubids", Required = false, HelpText = "Refresh players' clubIDs.")]
            public bool PlayerTeamClubImport { get; set; }

            // import statistics

            [Option("statistics", Required = false, HelpText = "Import player sndtta teams.")]
            public bool StatisticsImport { get; set; }

            // import opponents

            [Option("opponent", Required = false, HelpText = "Import player opponents.")]
            public bool OpponentsImport { get; set; }

            // pushing to firestore

            [Option("push-all", Required = false, HelpText = "Push all.")]
            public bool PushAll { get; set; }

            [Option("push-player", Required = false, HelpText = "Push players.")]
            public bool PushPlayers { get; set; }

            [Option("push-player-history", Required = false, HelpText = "Push player history.")]
            public bool PushPlayerHistory { get; set; }

            [Option("push-event", Required = false, HelpText = "Push events.")]
            public bool PushEvent { get; set; }

            [Option("push-event-player", Required = false, HelpText = "Push event players.")]
            public bool PushEventPlayers { get; set; }

            [Option("push-match", Required = false, HelpText = "Push event matches.")]
            public bool PushEventMatches { get; set; }

            [Option("push-club", Required = false, HelpText = "Push clubs.")]
            public bool PushClub { get; set; }

            [Option("push-sndtta-team", Required = false, HelpText = "Push sndtta team.")]
            public bool PushSndttaTeam { get; set; }

            [Option("push-sndtta-upcoming", Required = false, HelpText = "Push sndtta upcoming events.")]
            public bool PushSndttaUpcoming { get; set; }

            [Option("push-statistics", Required = false, HelpText = "Push statistics.")]
            public bool PushStatistics { get; set; }

            [Option("push-opponent", Required = false, HelpText = "Push opponents.")]
            public bool PushOpponents { get; set; }

            [Option("show-push-summary", Required = false, HelpText = "Show Push Summary.")]
            public bool ShowPushSummary { get; set; }

            [Option("site-map", Required = false, HelpText = "Generate google sitemap.")]
            public bool GoogleSitemap { get; set; }
        }

        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration().CreateLogger();
            var host = CreateHostBuilder(args).Build();

            
            var playerImporter = host.Services.GetRequiredService<IRatingCentralPlayersImporter>();
            var eventImporter = host.Services.GetRequiredService<IRatingCentralEventsImporter>();
            var matchTransformer = host.Services.GetRequiredService<IRatingCentralMatchTransformer>();
            var playerHistoryImporter = host.Services.GetRequiredService<IRatingCentralPlayerHistoryImporter>();
            var sndttaUpcomingEventImporter = host.Services.GetRequiredService<ISndttaUpcomingEventImporter>();
            var clubImporter = host.Services.GetRequiredService<IRatingCentralClubImporter>();
            var statisticImporter = host.Services.GetRequiredService<IStatisticsImporter>();
            var opponentImporter = host.Services.GetRequiredService<IRatingCentralOpponentImporter>();

            var sitemapGenerator = host.Services.GetRequiredService<IGoogleSiteMapGenerator>();
            var firebasePusher = host.Services.GetRequiredService<IFirebaseDeltaPushImporter>();

            var eventReviser = host.Services.GetRequiredService<IRatingCentralEventReviser>();

            try
            {
                Parser.Default.ParseArguments<Options>(args)
                   .WithParsed<Options>(o =>
                   {
                       if (o.AllImport)
                       {
                           // import clubs
                           clubImporter.Import().GetAwaiter().GetResult();
                           // import events, also discover player changes 
                           eventImporter.ImportEvents(o.ForceAll, o.EventId).GetAwaiter().GetResult();
                           // import event-players
                           eventImporter.ImportEventPlayers().GetAwaiter().GetResult();
                           // import event-matches
                           eventImporter.ImportEventMatches().GetAwaiter().GetResult();
                           // transform matches
                           matchTransformer.TransformMatches(o.ForceAll).GetAwaiter().GetResult();
                           // import players (include import player-history)
                           playerImporter.ImportPlayer().GetAwaiter().GetResult();
                           // import sndtta team
                           playerImporter.ImportSndttaTeam().GetAwaiter().GetResult();
                           // import ranking
                           playerImporter.ImportPlayerRanking().GetAwaiter().GetResult();
                           // import summary
                           playerImporter.ImportPlayerSummary().GetAwaiter().GetResult();
                           // import player clubs
                           playerImporter.ImportPlayerTeamClubs().GetAwaiter().GetResult();
                       }
                       else if (o.ClubImport)
                       {
                           clubImporter.Import().GetAwaiter().GetResult();
                       }
                       else if (o.EventImport)
                       {
                           // events need to be updated regularly only refresh the new events
                           eventImporter.ImportEvents(o.ForceAll, o.EventId).GetAwaiter().GetResult();
                       }
                       else if (o.ReviseEvent)
                       {
                           var appliedEvents = new List<string>();

                           if (string.IsNullOrEmpty(o.EventId))
                           {
                               appliedEvents = eventReviser.ReviseEvents().GetAwaiter().GetResult();
                           }
                           else
                           {
                               eventReviser.ReviseEvent(o.EventId).GetAwaiter().GetResult();
                               appliedEvents.Add(o.EventId);
                           }
                           
                           // import event-players
                           eventImporter.ImportEventPlayers().GetAwaiter().GetResult();
                           // import event-matches
                           eventImporter.ImportEventMatches().GetAwaiter().GetResult();
                           // transform matches
                           matchTransformer.TransformMatches(o.ForceAll).GetAwaiter().GetResult();

                           foreach(var id in appliedEvents)
                           {
                               firebasePusher.PushEventPlayersByEventId(id).GetAwaiter().GetResult();
                               firebasePusher.PushEventMatchesByEventId(id).GetAwaiter().GetResult();
                           }
                       }
                       else if (o.EventMatchesImport)
                       {
                           // events matches need to be updated after new events import
                           eventImporter.ImportEventMatches().GetAwaiter().GetResult();
                       }
                       else if (o.CountEventMatchAndPlayer)
                       {
                           eventImporter.Refresh_EventMatchAndPlayers_Counts().GetAwaiter().GetResult();
                       }
                       else if (o.Refresh_Gender_EventPlayers)
                       {
                           eventImporter.Refresh_Gender_EventPlayers().GetAwaiter().GetResult();
                       }
                       else if (o.Refresh_EventDate_EventPlayers)
                       {
                           eventImporter.Refresh_EventDate_EventPlayers().GetAwaiter().GetResult();
                       }
                       else if (o.SndttaPlayerHistoryImport)
                       {
                           // sndtta players need to be updated regularly after sndtta players import
                           playerHistoryImporter.Import().GetAwaiter().GetResult();
                       }
                       else if (o.EventMatchesTransform)
                       {
                           matchTransformer.TransformMatches(o.ForceAll).GetAwaiter().GetResult();
                       }
                       else if (o.PlayerImport)
                       {
                           // import players (include import player-history)
                           playerImporter.ImportPlayer().GetAwaiter().GetResult();
                           // import sndtta team
                           playerImporter.ImportSndttaTeam().GetAwaiter().GetResult();
                           // import ranking
                           playerImporter.ImportPlayerRanking().GetAwaiter().GetResult();
                           // import summary
                           playerImporter.ImportPlayerSummary().GetAwaiter().GetResult();
                           // import player clubs
                           playerImporter.ImportPlayerTeamClubs().GetAwaiter().GetResult();
                       }
                       else if (o.PlayerSummaryImport)
                       {
                           playerImporter.ImportPlayerSummary().GetAwaiter().GetResult();
                       }
                       else if (o.PlayerRankingImport)
                       {
                           playerImporter.ImportPlayerRanking().GetAwaiter().GetResult();
                       }
                       else if (o.PlayerSndttaTeamImport)
                       {
                           playerImporter.ImportSndttaTeam().GetAwaiter().GetResult();
                       }
                       else if (o.PlayerTeamClubImport)
                       {
                           playerImporter.ImportPlayerTeamClubs().GetAwaiter().GetResult();
                       }
                       else if (o.OpponentsImport)
                       {
                           opponentImporter.ImportOpponents().GetAwaiter().GetResult();
                       }
                       else if(o.EventPlayerImport)
                       {
                           eventImporter.ImportEventPlayers(o.ForceAll).GetAwaiter().GetResult();
                       }
                       else if(o.SndttaUpcomingEvent)
                       {
                           // sndtta events only need to be updated once per season
                           sndttaUpcomingEventImporter.Import().GetAwaiter().GetResult();
                       }
                       else if(o.StatisticsImport)
                       {
                           statisticImporter.ImportStatistics().GetAwaiter().GetResult();
                       }
                       // push firebase
                       else if (o.PushAll)
                       {
                           firebasePusher.PushClubs().GetAwaiter().GetResult();
                           firebasePusher.PushEvents().GetAwaiter().GetResult();
                           firebasePusher.PushEventPlayers().GetAwaiter().GetResult();
                           firebasePusher.PushEventMatches().GetAwaiter().GetResult();
                           firebasePusher.PushPlayers().GetAwaiter().GetResult();
                       }
                       else if(o.PushPlayers)
                       {
                           firebasePusher.PushPlayers(o.PlayerId).GetAwaiter().GetResult();
                       }
                       else if(o.PushPlayerHistory)
                       {
                           // Obselete
                           firebasePusher.PushPlayerHistories().GetAwaiter().GetResult();
                       }
                       else if(o.PushEvent)
                       {
                           firebasePusher.PushEvents(o.ForceAll).GetAwaiter().GetResult();
                       }
                       else if(o.PushEventPlayers)
                       {
                           firebasePusher.PushEventPlayers(o.ForceAll).GetAwaiter().GetResult();
                       }
                       else if(o.PushEventMatches && !o.Ytd)
                       {
                           firebasePusher.PushEventMatches(o.PlayerId, o.ActionCount).GetAwaiter().GetResult();
                       }
                       else if (o.PushEventMatches && o.Ytd)
                       {
                           firebasePusher.PushEventMatchesForActivePlayers().GetAwaiter().GetResult();
                       }
                       else if (o.PushSndttaTeam)
                       {
                           firebasePusher.PushSndttaTeams().GetAwaiter().GetResult();
                       }
                       else if(o.PushSndttaUpcoming)
                       {
                           firebasePusher.PushSndttaUpcomingEvents().GetAwaiter().GetResult();
                       }
                       else if (o.PushClub)
                       {
                           firebasePusher.PushClubs().GetAwaiter().GetResult();
                       }
                       else if (o.PushStatistics)
                       {
                           firebasePusher.PushStatistics().GetAwaiter().GetResult();
                       }
                       else if (o.PushOpponents)
                       {
                           firebasePusher.PushOpponents(o.PlayerId).GetAwaiter().GetResult();
                       }
                       else if(o.ShowPushSummary)
                       {
                           firebasePusher.ShowPendingPushSummary().GetAwaiter().GetResult();
                       }
                       else if(o.GoogleSitemap)
                       {
                           sitemapGenerator.Build().GetAwaiter().GetResult();
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