using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Extensions
{
    public static class DateTimeExtensions
    {
        public static Dictionary<int, (DateTime, DateTime)> GetQuarterStartAndEndDatesInLastNumberOfYears(int years)
        {
            Dictionary<int, (DateTime, DateTime)> quarterDates = new Dictionary<int, (DateTime, DateTime)>();
            DateTime currentDate = DateTime.Now;
            DateTime startDate = currentDate.AddYears(years * -1);

            while (startDate <= currentDate)
            {
                int quarter = (startDate.Month - 1) / 3 + 1;
                int year = startDate.Year;

                DateTime quarterStart = new DateTime(year, (quarter - 1) * 3 + 1, 1);
                DateTime quarterEnd = quarterStart.AddMonths(3).AddDays(-1);

                int quarterOfYear = year * 10 + quarter; // Combining year and quarter
                quarterDates.Add(quarterOfYear, (quarterStart, quarterEnd));

                startDate = startDate.AddMonths(3);
            }

            return quarterDates;
        }

        public static Dictionary<string, (DateTime, DateTime)> GetHalfYearStartAndEndDates(this DateTime selectedDate)
        {
            Dictionary<string, (DateTime, DateTime)> halfYearDates = new Dictionary<string, (DateTime, DateTime)>();
            DateTime currentDate = selectedDate;

            while (currentDate <= DateTime.Now)
            {
                int year = currentDate.Year;
                int month = currentDate.Month;
                int halfYear = (month <= 6) ? 1 : 2;

                DateTime halfYearStart = new DateTime(year, (halfYear == 1) ? 1 : 7, 1);
                DateTime halfYearEnd = halfYearStart.AddMonths(6).AddDays(-1);

                string key = halfYear==1?$"{year}-6":$"{year}-12";
                halfYearDates.Add(key, (halfYearStart, halfYearEnd));

                currentDate = currentDate.AddMonths(6);
            }

            return halfYearDates;
        }
    }
}
