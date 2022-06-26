export function isAnagram(origin, transformed) {
  let reducedTransformed = transformed
  for (let i = 0; i < origin.length; i++) {
    const originChar = origin[i]
    const indexOfCharInReducedTransformed = reducedTransformed.indexOf(originChar)
    if (indexOfCharInReducedTransformed === -1) {
      return false
    } else {
      reducedTransformed =
        reducedTransformed.substring(0, indexOfCharInReducedTransformed) +
        reducedTransformed.substring(indexOfCharInReducedTransformed + 1, reducedTransformed.length)
    }
  }

  return reducedTransformed.length === 0
}
