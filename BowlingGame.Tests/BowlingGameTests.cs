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
            SetupRolls(1, 1);
            SetupRolls(0, 19);

            var score = _game.Score();

            Assert.AreEqual(1, score);
        }

        [Test]
        public void GivenScore_WhenRollOneSpareAndThenGuttersOnlyInGame_ThenScoreShouldBe10()
        {
            SetupRolls(1, 1);
            SetupRolls(9, 1);
            SetupRolls(0, 18);

            var score = _game.Score();

            Assert.AreEqual(10, score);
        }

        [Test]
        public void GivenScore_WhenRollOneSpareAnd1PinInNextTurnInGame_ThenScoreShouldBe12()
        {
            SetupRolls(1, 1);
            SetupRolls(9, 1);
            SetupRolls(1, 1);
            SetupRolls(0, 17);

            var score = _game.Score();

            Assert.AreEqual(12, score);
        }
    }
}
