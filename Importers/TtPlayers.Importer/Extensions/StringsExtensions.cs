using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Extensions
{
    public static class StringsExtensions
    {
        public static string ToFirstLastName(this string val)
        {
            var names = val.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            var lastName = names[0];
            var firstName = names[1];

            return $"{firstName} {lastName}";
        }

        public static string ToLastName(this string val)
        {
            var names = val.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            var lastName = names[0];

            return lastName;
        }

        public static string ToFirstName(this string val)
        {
            var names = val.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            var firstName = names[1];

            return firstName;
        }

        public static string ToPlayerId(this string val)
        {
            // Player.php?PlayerID=93927
            var regex = new Regex("Player\\.php\\?PlayerID=([0-9]+)", RegexOptions.IgnoreCase);
            var match = regex.Match(val);

            return match.Groups[1].Value;
        }

        public static string ToEventId(this string val)
        {
            // EventSummary.php?EventID=48365&SortBy=Name
            var regex = new Regex("EventSummary\\.php\\?EventID=([0-9]+)&amp;SortBy=Name", RegexOptions.IgnoreCase);
            var match = regex.Match(val);

            return match.Groups[1].Value;
        }

        public static string ToClubId(this string val)
        {
            if (string.IsNullOrEmpty(val))
                return "";
            // ClubInfo.php?ClubID=1328
            var regex = new Regex("ClubInfo\\.php\\?ClubID=([0-9]+)", RegexOptions.IgnoreCase);
            var match = regex.Match(val);

            return match.Groups[1].Value;
        }

        public static List<string> ToWinnerScores(this string val)
        {
            if(string.IsNullOrEmpty(val))
                return new List<string>();

            /* "-16,9,-8,8,6"
              Represent as 
                16:18
                11:9
                8:11
                11:8
                11:6
            */
            var output = new List<string>();
            var vals = val.Split(new[] {','});
            foreach(var s in vals)
            {
                int.TryParse(s, out var score);
                if (score <= 0)
                {
                    //winner lose
                    int winnerScore = Math.Abs(score);
                    int loserScore = Math.Abs(score) >= 9? Math.Abs(score) + 2: 11;
                    output.Add($"{winnerScore}:{loserScore}");
                }
                else
                {
                    //winner win
                    int loserScore = score;
                    int winnerScore = score>9? score + 2: 11;
                    output.Add($"{winnerScore}:{loserScore}");
                }
            }

            return output;
        }

        public static List<string> ToLoserScores(this string val)
        {
            if (string.IsNullOrEmpty(val))
                return new List<string>();

            /* "-16,9,-8,8,6"
                 Represent as 
                   16:18
                   11:9
                   8:11
                   11:8
                   11:6
               */
            var output = new List<string>();
            var vals = val.Split(new[] { ',' });
            foreach (var s in vals)
            {
                int.TryParse(s, out var score);
                if (score <= 0)
                {
                    //winner lose
                    int winnerScore = Math.Abs(score);
                    int loserScore = Math.Abs(score) >= 9 ? Math.Abs(score) + 2 : 11;
                    output.Add($"{loserScore}:{winnerScore}");
                }
                else
                {
                    //winner win
                    int loserScore = score;
                    int winnerScore = score > 9 ? score + 2 : 11;
                    output.Add($"{loserScore}:{winnerScore}");
                }
            }

            return output;
        }

        public static (int?, List<int>?, int?, List<int>?) GetSetWinsAndScores(this string score)
        {
            if (string.IsNullOrEmpty(score))
                return (null, null, null, null);

            var setNumbers = Regex.Match(score, @"^(\d+)-(\d+)$");
            if (setNumbers.Success)
            {
                // score contains set numbers, such as 3-2
                int firstNumber = int.Parse(setNumbers.Groups[1].Value);
                int secondNumber = int.Parse(setNumbers.Groups[2].Value);
                return (firstNumber, null, secondNumber, null);
            }

            if (score.Contains(","))
            {
                var gameStrs = score.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
                var games = gameStrs.Select(x => {
                    int.TryParse(x, out var result);
                    return result;
                }).ToList();

                var winnerSets = games.Count(x => x > 0);
                var loserSets = games.Count(x => x <= 0);

                var (winnerScores, loserScores) = GetWinnerLoserSetScores(games);

                return (winnerSets, winnerScores, loserSets, loserScores);
            }

            return (null, null, null, null);
        }

        public static (List<int>, List<int>) GetWinnerLoserSetScores(List<int> scores)
        {
            var FirstPlayerScores = new List<int>();
            var SecondPlayerScores = new List<int>();

            /* "-16,9,-8,8,6"
              Represent as 
                16:18
                11:9
                8:11
                11:8
                11:6
            */
            foreach (var score in scores)
            {
                if (score <= 0)
                {
                    //winner lose
                    int winnerScore = Math.Abs(score);
                    int loserScore = Math.Abs(score) >= 9 ? Math.Abs(score) + 2 : 11;

                    FirstPlayerScores.Add(winnerScore);
                    SecondPlayerScores.Add(loserScore);
                }
                else
                {
                    //winner win
                    int loserScore = score;
                    int winnerScore = score > 9 ? score + 2 : 11;

                    FirstPlayerScores.Add(winnerScore);
                    SecondPlayerScores.Add(loserScore);
                }
            }

            return (FirstPlayerScores, SecondPlayerScores);
        }

        public static string ToStateShortform(this string state)
        {
            if (string.IsNullOrEmpty(state))
                return "";

            switch(state.ToLower())
            {
                case "act":
                case "australian capital territory":
                    return "ACT";
                case "new south wales":
                case "nsw":
                    return "NSW";
                case "tasmania":
                case "tas":
                    return "TAS";
                case "western australia":
                case "wa":
                    return "WA";
                case "queensland":
                case "qld":
                    return "QLD";
                case "victoria":
                case "vic":
                    return "VIC";
                case "south australia":
                case "sa":
                    return "SA";
                case "northern territory":
                case "nt":
                    return "NT";
                case "melbourne":
                    return "VIC";
                case "St Alban, VIC":
                    return "VIC";
            }

            return "";
        }

        public static List<string> GetTagWords(this string val, List<string> NoiseWords = null)
        {
            var tags = new List<string>();

            var name = val.Replace("!", " ").Replace("@", " ").Replace("#", " ").Replace("$", " ")
                .Replace("%", " ").Replace("^", " ").Replace("&", " ").Replace("*", " ").Replace(",", " ").Replace(".", " ");

            var words = name.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var word in words)
            {
                var trimedWord = word.ToLower().Trim();
                if (NoiseWords!=null && NoiseWords.Contains(trimedWord)) continue;

                tags.Add(trimedWord);
            }

            return tags;
        }

        public static List<string> GetNameComboTags(this Player player)
        {
            var tags = new List<string>();
            tags.Add(player.FirstName.ToLower());
            tags.Add(player.LastName.ToLower());
            tags.Add(player.FullName.ToLower());

            var firstNames = player.FirstName.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            
            if(firstNames.Length > 1)
            {
                // any first name + lastname combo
                foreach (var firstName in firstNames)
                {
                    tags.Add(firstName.ToLower());
                    tags.Add($"{firstName.ToLower()} {player.LastName.ToLower()}");
                }
            }
            return tags;
        }
    }
}
