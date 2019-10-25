using System;
using System.Collections.Generic;
using System.Linq;

namespace BowlingGame
{
    public class Game
    {
        private const int AllPins = 10;
        public List<int> Rolls = new List<int>();

        private readonly Dictionary<int, Func<int, int>> _spareBonus;
        private readonly Dictionary<int, Func<int, int>> _strikeBonus;

        public Game()
        {
            _spareBonus = new Dictionary<int, Func<int, int>>
            {
                {10, rollIndex => 10 + Rolls[rollIndex + 2]}
            };

            _strikeBonus = new Dictionary<int, Func<int, int>>
            {
                {10, rollIndex => 10 + Rolls[rollIndex + 1] + Rolls[rollIndex + 2]}
            };
        }

        public void Roll(int pins)
        {
            Rolls.Add(pins);
        }


        public int Score()
        {
            var frames = Enumerable.Range(0, 10);

            var startingGameState = new GameState
            {
                Score = 0,
                RollIndex = 0
            };
            return frames.Aggregate(startingGameState, (state, frameIndex) =>
            {
                var pins = Rolls[state.RollIndex];

                try
                {
                    return new GameState
                    {
                        Score = state.Score + _strikeBonus[pins](state.RollIndex),
                        RollIndex = state.RollIndex + 1
                    };
                }
                catch 
                {
                    var frameScore = Rolls[state.RollIndex] + Rolls[state.RollIndex + 1];
                    try
                    {
                        return new GameState
                        {
                            Score = state.Score + _spareBonus[frameScore](state.RollIndex),
                            RollIndex = state.RollIndex + 2
                        };
                    }
                    catch
                    {
                        return new GameState
                        {
                            Score = state.Score + frameScore,
                            RollIndex = state.RollIndex + 2
                        };
                    }
                }

            }).Score;
        }

        private int StrikeBonus(int rollIndex)
        {
            return 10 + Rolls[rollIndex + 1] + Rolls[rollIndex + 2];
        }

        private int SpareBonus(int rollIndex)
        {
            return 10 + Rolls[rollIndex + 2];
        }
    }

    public class GameState
    {
        public int Score { get; set; }
        public int RollIndex { get; set; }
    }
}