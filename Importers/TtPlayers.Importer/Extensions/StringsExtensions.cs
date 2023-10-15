using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

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
                    int loserScore = score>=9? score + 2: 11;
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
                    int loserScore = score >= 9 ? score + 2 : 11;
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
    }
}
