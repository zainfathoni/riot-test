import { isAnagram } from '../is-anagram'
import { beforeEach, afterEach, test, expect, describe } from 'vitest'

describe('isAnagram', () => {
  let tBefore, tAfter

  beforeEach(() => {
    tBefore = performance.now()
  })

  afterEach(({ meta: { name } }) => {
    tAfter = performance.now()
    // console.log(`${name} test took ${tAfter - tBefore} milliseconds.`)
  })

  test.each([
    ['', '', true],
    ['zain', 'niaz', true],
    ['zain', 'nia', false],
    ['bats', 'tabs', true],
    ['albuquerquealbuquerquealbuquerquealbuquerque', 'ublauqerequublauqerequublauqerequublauqerequ', true],
    ['albuquerquealbuquerquealbuquerquealbuquerque', 'ublauqerequublauqerequublauqerequublauqereqx', false],
  ])('is %s an anagram of %s? %s', (origin, candidate, result) => {
    expect(isAnagram(origin, candidate)).toEqual(result)
  })
})
