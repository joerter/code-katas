using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace BowlingGame
{
    public class Game
    {
        private readonly List<int> _rolls = new List<int>();
        private const int TotalPinCount = 10;
        private const int TotalFrameCount = 10;

        public void Roll(int pins)
        {
            _rolls.Add(pins);
        }

        public int Score()
        {
            var score = 0;
            var rollIndex = 0;

            for (var frameIndex = 1; frameIndex <= TotalFrameCount; frameIndex++)
            {
                if (IsStrike(_rolls[rollIndex]))
                {
                    score += _rolls[rollIndex] + IsStrikeBonus(rollIndex);
                    rollIndex += 1;
                }
                else if (IsSpare(_rolls[rollIndex], _rolls[rollIndex + 1]))
                {
                    score += 10 + _rolls[rollIndex + 2];
                    rollIndex += 2;
                }
                else
                {
                    score += _rolls[rollIndex] + _rolls[rollIndex + 1];
                    rollIndex += 2;
                }
            }

            return score;
        }

        private bool IsSpare(int roll1, int roll2)
        {
            return roll1 < 10 && roll1 + roll2 == 10;
        }

        private bool IsStrike(int roll)
        {
            return roll == TotalPinCount;
        }

        private int IsStrikeBonus(int rollIndex)
        {
            return _rolls[rollIndex + 1] + _rolls[rollIndex + 2];
        }
    }
}