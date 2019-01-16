using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace BowlingGame
{
    public class Game
    {
        private readonly List<int> _rolls = new List<int>();
        private bool _isPreviousFrameSpare = false;

        public void Roll(int pins)
        {
            _rolls.Add(pins);

            if (_rolls.Count % 2 == 0)
            {
                if (_rolls[_rolls.Count - 2] + pins == 10)
                {
                    _isPreviousFrameSpare = true;
                }
            }
            else
            {
                if (_isPreviousFrameSpare)
                {
                }
            }
        }

        public int Score()
        {
            return _rolls.Sum();
        }
    }
}