using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace BowlingGame
{
    public class Game
    {
        private List<int> _rolls = new List<int>();

        public void Roll(int pins)
        {
            _rolls.Add(pins);
        }

        public int Score()
        {
            var score = 0;
            var rollIndex = 0;

            for (var frame = 0; frame < 10; frame++)
            {
                if (RollIsStrike(rollIndex))
                {
                    score += 10 + StrikeBonus(rollIndex);
                    rollIndex++;
                    continue;
                }

                var frameScore = _rolls[rollIndex] + _rolls[rollIndex + 1];

                if (FrameIsSpare(frameScore))
                {
                    score += 10 + SpareBonus(rollIndex);
                }
                else
                {
                    score += frameScore;
                }

                rollIndex += 2;
            }

            return score;
        }

        private int StrikeBonus(int rollIndex)
        {
            return _rolls[rollIndex + 1] + _rolls[rollIndex + 2];
        }

        private bool RollIsStrike(int rollIndex)
        {
            return _rolls[rollIndex] == 10;
        }

        private int SpareBonus(int rollIndex)
        {
            return _rolls[rollIndex + 2];
        }

        private static bool FrameIsSpare(int frameScore)
        {
            return frameScore == 10;
        }
    }
}
