import { test, expect, describe, beforeAll, beforeEach, afterEach } from 'vitest'
import { countSentences } from '../count-sentences'
import fs from 'fs'
import path from 'path'

describe('countSentences stress tests', () => {
  let words_10_000, words_50_000, words_100_000, words_alpha, tBefore, tAfter

  beforeAll(() => {
    const t0Before = performance.now()
    words_10_000 = fs.readFileSync(path.join(__dirname, '../__mocks__/words_10_000.txt'), 'utf8').split('\n')
    const t0After = performance.now()
    // console.log(`Reading 10_000 words from the file took ${t0After - t0Before} milliseconds.`)

    const t1Before = performance.now()
    words_50_000 = fs.readFileSync(path.join(__dirname, '../__mocks__/words_50_000.txt'), 'utf8').split('\n')
    const t1After = performance.now()
    // console.log(`Reading 50_000 words from the file took ${t1After - t1Before} milliseconds.`)

    const t2Before = performance.now()
    words_100_000 = fs.readFileSync(path.join(__dirname, '../__mocks__/words_100_000.txt'), 'utf8').split('\n')
    const t2After = performance.now()
    // console.log(`Reading 100_000 words from the file took ${t2After - t2Before} milliseconds.`)

    const t3Before = performance.now()
    words_alpha = fs.readFileSync(path.join(__dirname, '../__mocks__/words_alpha.txt'), 'utf8').split('\n')
    const t3After = performance.now()
    // console.log(`Reading 466_000+ words from the file took ${t3After - t3Before} milliseconds.`)
  })

  beforeEach(() => {
    tBefore = performance.now()
  })

  afterEach(({ meta: { name } }) => {
    tAfter = performance.now()
    console.log(`${name} test took ${(tAfter - tBefore) / 1000} seconds.`)
  })

  test('runs 10_000 wordSet within 10 seconds', () => {
    const sentences = ['an endoscopic end']
    expect(countSentences(words_10_000, sentences)).toEqual([1])
  })

  test('runs 50_000 wordSet within 10 seconds', () => {
    const sentences = ['an endoscopic end']
    expect(countSentences(words_50_000, sentences)).toEqual([1])
  })
})
