/* eslint-disable @typescript-eslint/no-unused-vars */

// You’re given a board game which is a row of squares, each labeled
// with an integer. This can be represented by a list, e.g.
//
// [1, 3, 2, 0, 5, 2, 8, 4, 1]
//
// Given a start position on the board, you “win” by landing on
// a zero, where you move by jumping from square to square either
// left or right the number of spaces specified on the square
// you’re currently on.

const canWin = (board: number[], currentIndex: number): boolean => {
  return false // TODO: implement solution here
}

export const runTests = (): void => {
  const run = (name: string, array: number[], startingIndex: number, expected: boolean): void => {
    const results = canWin(array, startingIndex)
    console.log(`${name}: ${results === expected ? 'PASS' : 'FAIL'}`)
  }

  run('Test 1', [0], 0, true)
  run('Test 2', [1, 0], 0, true)
  run('Test 3', [1, 2, 0, 1], 1, true)
  run('Test 4', [1, 3, 0, 1], 0, false)
  run('Test 5', [2, 0, 3], 2, false)
  run('Test 6', [1, 1, 0], 0, true)
  run('Test 7', [1, 1, 3, 0, 3, 2], 1, true)
  run('Test 8', [1, 1, 3, 0, 3, 1], 1, false)
}
