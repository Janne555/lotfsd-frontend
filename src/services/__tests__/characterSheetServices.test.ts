import {
  calculateSavingThrows,
  calculateAttributeModifiers,
  calculateEncumbrance,
  mapEquipmentList
} from '../'

import {
  selectInventory
} from '../../Redux/selectors'

import { attributes, inventory, wallet, initialState } from '../../testData/initialState'

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
    expect(calculateEncumbrance(selectInventory(initialState), wallet)).toBe(2)
  });

  it('should calculate money', () => {
    expect(calculateEncumbrance(selectInventory(initialState), { copper: 900, gold: 0, silver: 0 })).toBe(2)
  });

  it('should calculate money 2', () => {
    expect(calculateEncumbrance(selectInventory(initialState), { copper: 1000, gold: 0, silver: 0 })).toBe(3)
  });
});

// describe('mapEquipmentList', () => {
//   it('should work for testdata', () => {
//     expect(mapEquipmentList(inventory, wallet)).toEqual([
//       {
//         amount: 5,
//         stackSize: 5,
//         equipped: false,
//         name: "Torch",
//         uuid: 
//       }
//     ] as EquipmentListItem[])
//   });
// });