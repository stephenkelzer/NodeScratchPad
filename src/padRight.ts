export const padRight = (value: string, desiredLength: number, padChar: string): string => {
  if (value.length <= desiredLength) {
    let returnValue = value
    for (let index = value.length; index < desiredLength; index++) {
      returnValue += padChar
    }
    return returnValue
  } else {
    return value.substring(0, desiredLength)
  }
}
