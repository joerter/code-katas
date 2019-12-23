# Bowling Game

Originally created by Uncle Bob Martin

## Scoring a Bowling Game

-   Each game consists of 10 frames of 2 rolls each
-   In each frame, the bowler tries to knock down all 10 pins
-   A spare is when the bowler knocks down all the pins in 2 rolls.
    -   The score for that frame is 10 plus the number of pins knocked down on the next roll
-   A strike is when the bowler knocks down all 10 pins on the first roll of the frame
    -   The score for that frame is 10 plus the number of pins knocked down on the
        next two rolls
-   If there is a spare or strike in the last frame, the bowler gets one or two extra rolls,
    respectively

## Implementation

-   A class called Game
-   Methods `roll` and `score`
-   `roll` will be called the correct number of times for a complete
    game with a valid number of pins
-   `score` will be called at the end and should return the correct score

## Examples

-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0

1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20

5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16

10 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14

10 10 10 10 10 10 10 10 10 10 10 10 = 300
