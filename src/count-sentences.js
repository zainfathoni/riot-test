'use strict'

import { anagramsSignatures } from './anagrams-signatures'

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

  const signatures = anagramsSignatures(wordSet)

  Object.values(signatures).forEach((words) => {
    const currentAnagramsCount = words.length
    words.forEach((word) => {
      anagramsCount[word] = currentAnagramsCount
    })
  })

  return sentences.map((sentence) => {
    const wordsInSentence = sentence.split(' ')
    const possibleWordsCountInSentence = wordsInSentence.map((word) => anagramsCount[word] ?? 1)
    const numberOfSentenceCanBeFormed = possibleWordsCountInSentence.reduce((acc, curr) => acc * curr, 1)
    return numberOfSentenceCanBeFormed
  })
}
