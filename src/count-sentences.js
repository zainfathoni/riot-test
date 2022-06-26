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
  const anagramsMapping = {}

  for (let i = 0; i < wordSet.length - 1; i++) {
    const origin = wordSet[i]

    for (let j = i + 1; j < wordSet.length; j++) {
      const candidate = wordSet[j]
      if (isAnagram(origin, candidate)) {
        // console.log(origin, candidate, isAnagram(origin, candidate))
        const originAnagramsMap = anagramsMapping[origin]
        if (originAnagramsMap) {
          originAnagramsMap.push(candidate)
        } else {
          anagramsMapping[origin] = [candidate]
        }

        const candidateAnagramsMap = anagramsMapping[candidate]
        if (candidateAnagramsMap) {
          candidateAnagramsMap.push(origin)
        } else {
          anagramsMapping[candidate] = [origin]
        }
      }
    }
  }

  // console.log(anagramsMapping)

  if (Object.keys(anagramsMapping).length === 0) {
    // no anagrams found
    return sentences.map(() => 1)
  } else {
    return sentences.map((sentence) => {
      const wordsInSentence = sentence.split(' ')
      const possibleWordsCountInSentence = wordsInSentence.map((word) =>
        anagramsMapping[word]?.length // account for the word itself if it has no anagram
          ? anagramsMapping[word].length + 1
          : 1
      )
      const numberOfSentenceCanBeFormed = possibleWordsCountInSentence.reduce((acc, curr) => acc * curr, 1)
      return numberOfSentenceCanBeFormed
    })
  }
}
