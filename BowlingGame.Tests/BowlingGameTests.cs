using NUnit.Framework;

namespace BowlingGame.Tests
{
    [TestFixture]
    public class BowlingGameTests
    {
        private Game _game;

        [SetUp]
        public void SetUp()
        {
            _game = new Game();
        }

        public void SetupRolls(int pinsPerRoll, int rolls)
        {
            for (int i = 0; i < rolls; i++)
            {
                _game.Roll(pinsPerRoll);
            }
        }

        private void RollGame(params int[] rolls)
        {
            for (var i = 0; i < 20; i++)
            {
                if (i >= rolls.Length)
                {
                    _game.Roll(0);
                    continue;
                }

                _game.Roll(rolls[i]);
            }
        }

        [Test]
        public void GivenScore_WhenAllGutterBalls_ThenScoreShouldBeZero()
        {
            SetupRolls(0, 20);

            var score = _game.Score();

            Assert.AreEqual(0, score);
        }

        [Test]
        public void GivenScore_WhenRollOfOne_ThenScoreShouldBeOne()
        {
            RollGame(1);

            var score = _game.Score();

            Assert.AreEqual(1, score);
        }

        [Test]
        public void GivenScore_WhenRollOneSpareAndThenGuttersOnlyInGame_ThenScoreShouldBe10()
        {
            RollGame(1, 9);

            var score = _game.Score();

            Assert.AreEqual(10, score);
        }

        [Test]
        public void GivenScore_WhenRollOneSpareAnd1PinInNextTurnInGame_ThenScoreShouldBe12()
        {
            RollGame(1, 9, 1);

            var score = _game.Score();

            Assert.AreEqual(12, score);
        }

        [Test]
        public void GivenScore_WhenRollTwoSparesInARowAnd1PinInNextTurnInGame_ThenScoreShouldBe12()
        {
            RollGame(1, 9, 5, 5, 3);

            var score = _game.Score();

            Assert.AreEqual(31, score);
        }

        [Test]
        public void GivenScore_WhenRollAStrikeAnd1PinInEachOfNextTwoRolls_ThenScoreShouldBe14()
        {
            RollGame(10, 1, 1);

            var score = _game.Score();

            Assert.AreEqual(14, score);
        }

        [Test]
        public void GivenScore_WhenZeroTenSpareIsRolled_ThenScoreAsASpare()
        {
            RollGame(0, 10, 1, 1);

            var score = _game.Score();

            Assert.AreEqual(13, score);
        }

        [Test]
        public void GivenScore_WhenStrikeFollowedBySpare_ThenScoreStrikeAndSpare()
        {
            RollGame(10, 9, 1, 1);

            var score = _game.Score();

            Assert.AreEqual(32, score);
        }

        [Test]
        public void GivenScore_WhenPerfectGame_ThenScoreShouldBe300()
        {
            SetupRolls(10,12);

            var score = _game.Score();

            Assert.AreEqual(300, score);
        }
    }
}
