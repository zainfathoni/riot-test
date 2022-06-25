import { calculate } from '../index'
import { test, expect } from 'vitest'

test('calculates plus operation', () => {
  expect(calculate('1 2 +')).toEqual(5)
})
