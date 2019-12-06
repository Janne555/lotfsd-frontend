import {
  calculateSavingThrows,
  calculateAttributeModifiers,
  calculateEncumbrance
} from '../'
import { attributes, inventory } from '../../testData/initialState'

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
      const effect = { type: "attributeModifierEffect", target, value: -3 }
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
    expect(calculateEncumbrance(inventory)).toBe(3)
  });

  it('should round up partial stacks ', () => {
    expect(calculateEncumbrance([
      {
        type: 'item',
        encumbrance: 0.2,
        name: "Torch",
        effects: [],
        stackSize: 5,
        uuid: "123123"
      }
    ])).toBe(1)
  });

  it('should calculate multiple stacks', () => {
    expect(calculateEncumbrance(inventory.concat([
      {
        type: 'item',
        encumbrance: 0.2,
        name: "Torch",
        effects: [],
        stackSize: 5,
        uuid: "123123"
      }
    ]))).toBe(4)
  });
});