using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Tests
{
    public class DateTimeExtensionsTests
    {
        [Test]
        public void GetEveryHalfYearDatesFromSelectedDate_Tests()
        {
            var selected = new DateTime(2020, 1, 1);

            var dates = selected.GetHalfYearStartAndEndDates();

            dates.Count.Should().Be(9);
        }
    }
}
