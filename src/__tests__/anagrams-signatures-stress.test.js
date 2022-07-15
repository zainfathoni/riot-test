import { beforeAll, beforeEach, afterEach, test, expect, describe } from 'vitest'
import { anagramsSignatures } from '../anagrams-signatures'
import fs from 'fs'
import path from 'path'

describe('anagramsSignatures', () => {
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
    // console.log(`${name} test took ${(tAfter - tBefore) / 1000} seconds.`)
  })

  test('runs 10_000 wordSet within 10 seconds', () => {
    expect(anagramsSignatures(words_10_000)).toBeDefined()
  })

  test('runs 50_000 wordSet within 10 seconds', () => {
    expect(anagramsSignatures(words_50_000)).toBeDefined()
  })

  test('runs 100_000 wordSet within 10 seconds', () => {
    expect(anagramsSignatures(words_100_000)).toBeDefined()
  })

  test('runs alpha wordSet within 10 seconds', () => {
    expect(anagramsSignatures(words_alpha)).toBeDefined()
  })
})
