using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Extensions
{
    public static class NumberExtensions
    {
        public static int GetTotalSets(this int? winnerSets)
        {
            switch (winnerSets)
            {
                case 2: return 3;
                case 3: return 5;
                case 4: return 7;
                case 5: return 9;
                case 6: return 11;
            }

            return 0;
        }
    }
}
