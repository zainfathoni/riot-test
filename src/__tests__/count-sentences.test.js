import { test, expect, describe } from 'vitest'
import { countSentences } from '../count-sentences'

describe('countSentences', () => {
  test.each([
    [
      [9, 9],
      ['zain', 'niaz', 'inza', 'is', 'not'],
      ['zain is not niaz', 'inza is not zain'],
    ],
    [[1], ['influenza', 'fluent', 'not', 'i', 'am', 'in'], ['i am not fluent in influenza']],
  ])('should return the count of possible sentences: %j', (expectedCounts, wordSet, sentences) => {
    expect(countSentences(wordSet, sentences)).toEqual(expectedCounts)
  })
})
