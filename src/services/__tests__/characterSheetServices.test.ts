import {
  calculateSavingThrows,
  calculateAttributeModifiers,
  calculateEncumbrance
} from '../'
import { attributes, inventory, wallet } from '../../testData/initialState'

describe('calculateSavingThrows', () => {
  const attributeModifiers = {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  }

  const savingThrows = {
    breathWeapon: 0,
    magic: 0,
    magicalDevice: 0,
    paralyze: 0,
    poison: 0
  }

  it('should apply wisdom modifier to non spell related saving throws', () => {
    expect(calculateSavingThrows(savingThrows, { ...attributeModifiers, wisdom: 3 }))
      .toEqual({
        breathWeapon: 3,
        magic: 0,
        magicalDevice: 0,
        paralyze: 3,
        poison: 3
      })
  })

  it('should apply intelligence modifier to spell related saving throws', () => {
    expect(calculateSavingThrows(savingThrows, { ...attributeModifiers, intelligence: 3 }))
      .toEqual({
        breathWeapon: 0,
        magic: 3,
        magicalDevice: 3,
        paralyze: 0,
        poison: 0
      })
  })
});

describe('calculateAttributeModifiers', () => {
  const expected = {
    intelligence: 1,
    charisma: 3,
    constitution: 2,
    dexterity: 2,
    strength: 1,
    wisdom: 1
  }

  it.each([
    ["intelligence", -2],
    ["charisma", 0],
    ["constitution", -1],
    ["dexterity", -1],
    ["wisdom", -2],
    ["strength", -2]
  ])(
    'should add %s effect',
    (target, result) => {
      const effect: Effect = { type: "attributeModifierEffect", target: target as keyof Attributes, value: -3 }
      expect(calculateAttributeModifiers(attributes, [effect]))
        .toEqual({
          ...expected,
          [target]: result
        });
    }
  );
});

describe('calculateEncumbrance', () => {
  it('should work for testdata', () => {
    expect(calculateEncumbrance(inventory, wallet)).toBe(2)
  });

  it('should calculate money', () => {
    expect(calculateEncumbrance(inventory, { copper: 9000, gold: 0, silver: 0 })).toBe(2)
  });

  it('should calculate money 2', () => {
    expect(calculateEncumbrance(inventory, { copper: 10000, gold: 0, silver: 0 })).toBe(3)
  });
});