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
        public void GivenScoreWhenGutterGameThenScoreIs0()
        {
            RollMany(20, 0);

            var score = _game.Score();

            Assert.AreEqual(0, score);
        }

        [Test]
        public void GivenScoreWhenAllOnesAreRolledThenScoreIs20()
        {
            RollMany(20, 1);

            var score = _game.Score();

            Assert.AreEqual(20, score);
        }

        [Test]
        public void GivenScoreWhenOneSpaceThenCorrectScore()
        {
            RollSpare();
            _game.Roll(3);
            RollMany(17, 0);

            var score = _game.Score();

            Assert.AreEqual(16, score);
        }

        [Test]
        public void GivenScoreWhenOneStrikeThenCorrectScore()
        {
            RollStrike();
            _game.Roll(3);
            _game.Roll(3);
            RollMany(17, 0);

            var score = _game.Score();

            Assert.AreEqual(22, score);
        }

        [Test]
        public void GivenScoreWhenPerfectGameThen300()
        {
            RollMany(12, 10);

            var score = _game.Score();

            Assert.AreEqual(300, score);
        }

        private void RollStrike()
        {
            _game.Roll(10);
        }

        private void RollSpare()
        {
            _game.Roll(5);
            _game.Roll(5);
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
