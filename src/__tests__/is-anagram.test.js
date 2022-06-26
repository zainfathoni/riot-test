import { isAnagram } from '../is-anagram'
import { test, expect, describe } from 'vitest'

describe('isAnagram', () => {
  test.each([
    ['', '', true],
    ['zain', 'niaz', true],
    ['zain', 'nia', false],
    ['bats', 'tabs', true],
  ])('is %s candidate of %s? %s', (origin, candidate, result) => {
    expect(isAnagram(origin, candidate)).toEqual(result)
  })
})
