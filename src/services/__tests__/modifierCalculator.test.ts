import { calculateModifier } from '../index'

describe('test suite', () => {
  it.each([[3, -3], [5, -2], [7, -1], [8, -1], [9, 0], [15, 1], [16, 2], [18, 3]])(
    "for value %d the modifier should be %d",
    (input, output) => {
      expect(calculateModifier(input)).toBe(output)
    })
})
