import { describe, it, expect } from 'vitest'
import { sum, subtract } from './sum.js'

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('handles negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2)
  })

  it('handles zero', () => {
    expect(sum(0, 5)).toBe(5)
  })
})

describe('subtract', () => {
  it('subtracts two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('handles negative result', () => {
    expect(subtract(3, 5)).toBe(-2)
  })
})