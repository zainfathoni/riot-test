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

    const currentAnagrams = []

    for (let j = i + 1; j < wordSet.length; j++) {
      const candidate = wordSet[j]
      if (isAnagram(origin, candidate)) {
        // console.log(origin, candidate, isAnagram(origin, candidate))
        const originAnagramsCount = anagramsCount[origin]
        const newAnagramsCount = originAnagramsCount
          ? originAnagramsCount + 1 // add to the existing array of anagrams
          : 1 // first anagram

        anagramsCount[origin] = newAnagramsCount
        anagramsCount[candidate] = newAnagramsCount

        // TODO: there must be something we can do here to optimise the soarch
        // we can skip searching for the rest of the wordSet if we already found the anagram
        currentAnagrams.push(origin, candidate)
      }
    }
  }

  // console.log(anagramsCount)

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
