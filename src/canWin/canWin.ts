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

export const canWin = (board: number[], currentIndex: number, memo: Record<number, boolean> = {}): boolean => {
  if (currentIndex in memo) return memo[currentIndex]

  const currentValue = board[currentIndex]
  if (currentValue === undefined) return false
  if (currentValue === 0) return true

  memo[currentIndex] = false
  return canWin(board, currentIndex - currentValue, memo) || canWin(board, currentIndex + currentValue, memo)
}
