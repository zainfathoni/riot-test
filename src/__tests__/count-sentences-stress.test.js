import { test, expect, describe, beforeAll } from 'vitest'
import { countSentences } from '../count-sentences'
import fs from 'fs'
import path from 'path'

describe('countSentences stress tests', () => {
  let words_10_000, words_50_000

  beforeAll(() => {
    words_10_000 = fs.readFileSync(path.join(__dirname, '../__mocks__/words_10_000.txt'), 'utf8').split('\n')
    // words_50_000 = fs.readFileSync(path.join(__dirname, '../__mocks__/words_50_000.txt'), 'utf8').split('\n')
  })

  test('should run with 10_000 wordSet within 10 seconds', () => {
    const sentences = ['an endoscopic end']

    expect(countSentences(words_10_000, sentences)).toEqual([1])
  })

  test.skip('should run with 50_000 wordSet within 10 seconds', () => {
    const sentences = ['an endoscopic end']

    expect(countSentences(words_50_000, sentences)).toEqual([1])
  })
})
