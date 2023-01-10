# Sliding Puzzle App

This is a Sliding Puzzle Game, the aim of the game is to arrange a scrambled board of size **N** back into it's original position ! <br>The board consists of tiles from **0** to **N^2**, any tiles orthogonally adjacent to tile **0** may switch places with tile **0**.

# Features

![Features](/resource/features.png)

## Red
- Switch between light and dark colour schemes

## Blue
- Enter a value for **N** then confirm to set size

## Green
- Scramble: Shuffles the board into a random arrangement
- Lock/Unlock: If the board is locked, you cannot update the board size or scramble, if the board is unlocked you cannot move with the tiles
- Hide/Show solution: Calculates a valid solution that you can follow along
- Play/Pause solution: Plays the calculated solution
- <</>>: Adjusts the speed of the play speed

## Orange
- Displays the move order of the calculated solution, the next move being the highlighted box

## Other Features
- Timer count when board is scrambled then locked
- Move count when board is scambled then locked

# Demo

![Demo](/resource/demo.gif)

## Authors

- Me =)

## Acknowledgments

- Algorithm used for shuffling the board is the [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
