using System;
using System.Collections.Generic;
using System.Linq;

namespace BowlingGame
{
    public class Game
    {
        private readonly List<int> _rolls = new List<int>();
        private readonly Dictionary<int, Func<int, int>> _spareBonus;
        private readonly Dictionary<int, Func<int, int>> _strikeBonus;

        public Game()
        {
            _spareBonus = new Dictionary<int, Func<int,int>>
            {
                {10, rollIndex => 10 + _rolls[rollIndex + 2]}
            };

            _strikeBonus = new Dictionary<int, Func<int,int>>
            {
                {10, rollIndex => 10 + _rolls[rollIndex + 1] + _rolls[rollIndex + 2]}
            };
        }

        public void Roll(int pins)
        {
            _rolls.Add(pins);
        }

        public double Score()
        {
            var frames = Enumerable.Range(0, 10);
            var startingState = new GameState
            {
                Score = 0,
                RollIndex = 0
            };

            return frames
                .Aggregate(startingState, (state, frameIndex) => GetNextGameState(state)).Score;
        }
        private GameState GetNextGameState(GameState previousState)
        {
            var pinsKnockedDown = _rolls[previousState.RollIndex];

            try
            {
                return GameStateAfterStrike(previousState, pinsKnockedDown);
            }
            catch (KeyNotFoundException e)
            {
                var frameScore = _rolls[previousState.RollIndex] + _rolls[previousState.RollIndex + 1];

                try
                {
                    return GameStateAfterSpare(previousState, frameScore, previousState.RollIndex);
                }
                catch (KeyNotFoundException ex)
                {
                    return GameStateAfterRegularFrame(previousState, frameScore);
                }
            }
        }

        private GameState GameStateAfterStrike(GameState previousState, int pinsKnockedDown)
        {
            var strikeBonus = _strikeBonus[pinsKnockedDown].Invoke(previousState.RollIndex);
            return new GameState
            {
                Score = previousState.Score + strikeBonus,
                RollIndex = previousState.RollIndex + 1
            };
        }

        private GameState GameStateAfterSpare(GameState previousState, int frameScore, int rollIndex)
        {
            var spareBonus = _spareBonus[frameScore].Invoke(rollIndex);
            return new GameState
            {
                Score = previousState.Score + spareBonus,
                RollIndex = previousState.RollIndex + 2
            };
        }

        private static GameState GameStateAfterRegularFrame(GameState previousState, int frameScore)
        {
            return new GameState
            {
                Score = previousState.Score + frameScore,
                RollIndex = previousState.RollIndex + 2
            };
        }
    }
}