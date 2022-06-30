'use strict'

import { isAnagram } from './is-anagram'

/*
 * Complete the 'countSentences' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordSet
 *  2. STRING_ARRAY sentences
 */

export function countSentences(wordSet, sentences) {
  const anagramsCount = {}

  for (let i = 0; i < wordSet.length - 1; i++) {
    const origin = wordSet[i]

    const currentAnagramsSet = [origin]

    for (let j = i + 1; j < wordSet.length; j++) {
      const candidate = wordSet[j]
      const candidateAnagramsMap = anagramsCount[candidate]
      // this is the first time we see this candidate
      if (!candidateAnagramsMap) {
        if (isAnagram(origin, candidate)) {
          currentAnagramsSet.push(candidate)
        }
      }
    }

    if (currentAnagramsSet.length > 1) {
      currentAnagramsSet.forEach((anagram) => {
        anagramsCount[anagram] = currentAnagramsSet.length - 1
      })
    }
  }

  // console.log(anagramsMapping)

  if (Object.keys(anagramsCount).length === 0) {
    // no anagrams found
    return sentences.map(() => 1)
  } else {
    return sentences.map((sentence) => {
      const wordsInSentence = sentence.split(' ')
      const possibleWordsCountInSentence = wordsInSentence.map((word) =>
        anagramsCount[word] // account for the word itself if it has no anagram
          ? anagramsCount[word] + 1
          : 1
      )
      const numberOfSentenceCanBeFormed = possibleWordsCountInSentence.reduce((acc, curr) => acc * curr, 1)
      return numberOfSentenceCanBeFormed
    })
  }
}
