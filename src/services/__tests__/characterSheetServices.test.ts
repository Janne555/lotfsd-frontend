import {
  calculateSavingThrows,
  calculateAttributeModifiers,
  calculateEncumbrance,
} from '../'
import { ATTRIBUTES, WALLET, EQUIPMENT } from '../../testdata';

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
        breathWeapon: { base: 0, modified: -3 },
        magic: { base: 0, modified: 0 },
        magicalDevice: { base: 0, modified: 0 },
        paralyze: { base: 0, modified: -3 },
        poison: { base: 0, modified: -3 }
      })
  })

  it('should apply intelligence modifier to spell related saving throws', () => {
    expect(calculateSavingThrows(savingThrows, { ...attributeModifiers, intelligence: 3 }))
      .toEqual({
        breathWeapon: { base: 0, modified: 0 },
        magic: { base: 0, modified: -3 },
        magicalDevice: { base: 0, modified: -3 },
        paralyze: { base: 0, modified: 0 },
        poison: { base: 0, modified: 0 }
      })
  })
});

describe('calculateAttributeModifiers', () => {
  const expected = {
    intelligence: 1,
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    strength: 1,
    wisdom: 1
  }

  it.each([
    ["intelligence", -2],
    ["charisma", -3],
    ["constitution", -3],
    ["dexterity", -3],
    ["wisdom", -2],
    ["strength", -2]
  ])(
    'should add %s effect',
    (target, result) => {
      const effect: Effect = { type: "attributeModifierEffect", target: target as keyof Attributes, value: -3 }
      expect(calculateAttributeModifiers(ATTRIBUTES, [effect]))
        .toEqual({
          ...expected,
          [target]: result
        });
    }
  );
});

describe('calculateEncumbrance', () => {
  it('should work for testdata', () => {
    expect(calculateEncumbrance(EQUIPMENT, WALLET)).toBe(1)
  });

  it('should calculate money', () => {
    expect(calculateEncumbrance(EQUIPMENT, { copper: 900, gold: 0, silver: 0 })).toBe(2)
  });

  it('should calculate money 2', () => {
    expect(calculateEncumbrance(EQUIPMENT, { copper: 1000, gold: 0, silver: 0 })).toBe(2)
  });
});