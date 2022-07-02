export const anagramsSignatures = (wordSet) => {
  const signatures = {}

  for (let i = 0; i < wordSet.length; i++) {
    const word = wordSet[i]
    const signature = word.split('').sort().join('')

    if (signatures[signature]) {
      signatures[signature].push(word)
    } else {
      signatures[signature] = [word]
    }
  }

  return signatures
}
