using FluentAssertions;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [TestCase("10,10,2", 3, new[] { 12, 12, 11 }, 0, new[] { 10, 10, 2 })]
        [TestCase("1,-9,4,4", 3, new[] { 11, 9, 11, 11 }, 1, new[] { 1, 11, 4, 4 })]
        [TestCase("-10,6,9,11", 3, new[] { 10, 11, 11, 13 }, 1, new[] { 12, 6, 9, 11 })]
        [TestCase("-10,14,4,-10,6", 3, new[] { 10, 16, 11, 10, 11 }, 2, new[] { 12, 14, 4, 12, 6 })]
        public void GetSetWinsAndScores_Succeed(string score, int expectedWinnerSet, int[] expectedWinnerScores, int expectedLoserSet, int[] expectedLoserScores)
        {
            var (winnerSetsWins, winnerScores, loserSetWins, loserScores) = score.GetSetWinsAndScores();
            winnerSetsWins.Should().Be(expectedWinnerSet);
            winnerScores.Should().BeEquivalentTo(expectedWinnerScores.ToList());
            loserSetWins.Should().Be(expectedLoserSet);
            loserScores.Should().BeEquivalentTo(expectedLoserScores.ToList());
        }
    }
}