// sum.test.js
import { describe, it, expect } from 'vitest'
import { sum } from './sum.js'

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('handles negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2)
  })
})