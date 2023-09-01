// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*
Given a list of words, write a function that returns the longest prefix that
all of the words share. If there is no shared prefix, return an empty string.
*/

const longestSharedPrefix = (words: string[]): string => {
  const [firstWord, ...listOfWords] = words
  let prefix = ''

  for (let i = 0; i < firstWord?.length ?? 0; i++) {
    const char = firstWord[i]
    for (const word of listOfWords) {
      if (word[i] !== firstWord[i]) {
        return prefix
      }
    }

    prefix += char
  }

  return prefix
}

const runTest = (name: string, array: string[], expected: string): void => {
  const result = longestSharedPrefix(array)
  console.log(`${name}: ${result === expected ? 'PASS' : 'FAIL'}`)
}

runTest('Test 1', ['abc', 'abd', 'abf'], 'ab')
runTest('Test 2', ['abcd', 'abcdefghij', 'abcdefghijklmno'], 'abcd')
runTest('Test 3', ['water', 'watergun'], 'water')
runTest('Test 4', ['basket', 'basketball', 'basketweaving'], 'basket')
runTest('Test 5', [], '')
runTest('Test 5', ['test'], 'test')
runTest('Test 5', ['word', 'word'], 'word')
runTest('Test 5', ['', 'abc'], '')
