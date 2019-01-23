using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace BowlingGame
{
    public class Game
    {
        private readonly List<int> _rolls = new List<int>();
        private const int TotalPinCount = 10;

        public void Roll(int pins)
        {
            _rolls.Add(pins);
        }

        public int Score()
        {
            var score = 0;

            for (var rollIndex = 0; rollIndex < _rolls.Count; rollIndex++)
            {
                score += _rolls[rollIndex];

                if (IsSpare(rollIndex))
                {
                    score += GetSpareBonus(rollIndex);
                }
                else if (IsStrike(rollIndex))
                {
                    score += GetStrikeBonus(rollIndex);
                }
            }

            return score;
        }

        private bool IsEndOfFrame(int rollIndex)
        {
            return (rollIndex + 1) % 2 == 0;
        }

        private bool IsSpare(int rollIndex)
        {
            if (IsEndOfFrame(rollIndex))
            {
                return _rolls[rollIndex - 1] + _rolls[rollIndex] == TotalPinCount;
            }

            return false;
        }

        private bool IsStrike(int rollIndex)
        {
            return _rolls[rollIndex] == TotalPinCount;
        }

        private int GetSpareBonus(int rollIndex)
        {
            return _rolls[rollIndex + 1];
        }

        private int GetStrikeBonus(int rollIndex)
        {
            return _rolls[rollIndex + 1] + _rolls[rollIndex + 2];
        }
    }
}