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
        public void GivenRoll_WhenAllZeros_ThenScoreIsZero()
        {
            RollMany(20, 0);

            Assert.AreEqual(0, _game.Score());
        }

        [Test]
        public void GivenRoll_WhenAllOnes_ThenScoreReturns20()
        {
            RollMany(20, 1);

            Assert.AreEqual(20, _game.Score());
        }

        [Test]
        public void GivenRoll_WhenSpareIsRolled_ThenScoreReturnsCorrectSpareBonus()
        {
            _game.Roll(5);
            _game.Roll(5);
            _game.Roll(3);
            RollMany(17, 0);

            Assert.AreEqual(16, _game.Score());
        }

        [Test]
        public void GivenRoll_WhenStrikeIsRolled_ThenScoreReturnsCorrectStrikeBonus()
        {
            _game.Roll(10);
            _game.Roll(1);
            _game.Roll(1);
            RollMany(17, 0);

            Assert.AreEqual(14, _game.Score());
        }

        private void RollMany(int rolls, int pins)
        {
            for (int i = 0; i < rolls; i++)
            {
                _game.Roll(pins);
            }
        }
    }
}
