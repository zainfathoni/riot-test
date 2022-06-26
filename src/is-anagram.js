export function isAnagram(origin, candidate) {
  if (origin.length !== candidate.length) {
    // definitely not an anagram
    return false
  }

  const originCharCount = {}
  for (let i = 0; i < origin.length; i++) {
    const currentChar = origin[i]
    originCharCount[currentChar] = originCharCount[currentChar] ? originCharCount[currentChar] + 1 : 1
  }

  for (let i = 0; i < candidate.length; i++) {
    const currentChar = candidate[i]
    if (originCharCount[currentChar] > 0) {
      originCharCount[currentChar] = originCharCount[currentChar] - 1
    } else {
      return false
    }
  }

  Object.values(originCharCount).forEach((count) => {
    if (count > 0) return false
  })
  return true
}
