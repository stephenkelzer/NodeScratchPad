import { canWin } from './canWin'

describe('canWin', () => {
  test.each([
    [[0], 0, true],
    [[1, 0], 0, true],
    [[1, 2, 0, 1], 1, true],
    [[1, 3, 0, 1], 0, false],
    [[2, 0, 3], 2, false],
    [[1, 1, 0], 0, true],
    [[1, 1, 3, 0, 3, 2], 1, true],
    [[1, 1, 3, 0, 3, 1], 1, false],
  ])('case: (%s, %s, %s)', (board: number[], startingIndex: number, expectedResult: boolean) => {
    expect(canWin(board, startingIndex)).toBe(expectedResult)
  })
})
