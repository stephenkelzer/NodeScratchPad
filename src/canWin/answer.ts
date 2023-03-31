export const canWin = (board: number[], currentIndex: number, memo: Record<number, boolean> = {}): boolean => {
  if (currentIndex in memo) return memo[currentIndex]

  const currentValue = board[currentIndex]
  if (currentValue === undefined) return false
  if (currentValue === 0) return true

  memo[currentIndex] = false
  return canWin(board, currentIndex - currentValue, memo) || canWin(board, currentIndex + currentValue, memo)
}
