import { test, expect, describe } from 'vitest'
import { anagramsSignatures } from '../anagrams-signatures'

describe('anagramsSignatures', () => {
  test.each([[{ ainz: ['zain', 'niaz', 'inza'], is: ['is'], not: ['not'] }, ['zain', 'niaz', 'inza', 'is', 'not']]])(
    'should return signatures: %j',
    (signatures, wordSet) => {
      expect(anagramsSignatures(wordSet)).toEqual(signatures)
    }
  )
})
