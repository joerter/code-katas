using NUnit.Framework;

namespace BowlingGame.Tests
{
    [TestFixture]
    public class BowlingGameTests
    {
        private Game _game;

        [SetUp]
        public void Setup()
        {
            _game = new Game();
        }

        [Test]
        public void GivenGame_WhenAllGutterBalls_ThenScoreReturns0()
        {
            RollMany(0, 20);

            Assert.AreEqual(0, _game.Score());
        }

        [Test]
        public void GivenGame_WhenAllOnes_ThenScoreReturns20()
        {
            RollMany(1, 20);

            Assert.AreEqual(20, _game.Score());
        }

        [Test]
        public void GivenGame_WhenRollOneSpare_ThenScoreReturnsCorrectly()
        {
            _game.Roll(5);
            _game.Roll(5);
            _game.Roll(3);
            RollMany(0, 17);

            Assert.AreEqual(16, _game.Score());
        }

        [Test]
        public void GivenGame_WhenRollOneStrike_ThenScoreReturnsCorrectly()
        {
            _game.Roll(10);
            _game.Roll(1);
            _game.Roll(1);
            RollMany(0, 17);

            Assert.AreEqual(14, _game.Score());
        }

        [Test]
        public void GivenGame_WhenPerfectGame_ThenScoreReturns300()
        {
            RollMany(10, 22);

            Assert.AreEqual(300, _game.Score());
        }

        private void RollMany(int pins, int rolls)
        {
            for (int i = 0; i < rolls; i++)
            {
                _game.Roll(pins);
            }
        }
    }
}
