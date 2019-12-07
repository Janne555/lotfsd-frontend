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
import { MONEY } from '../../constants'
import range from 'lodash/range'
import shortid from 'shortid'

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

describe('mapEquipmentList', () => {
  const { mockRestore } = jest.spyOn(shortid, 'generate').mockReturnValue("key")
  afterAll(mockRestore)

  it('should work for testdata', () => {
    const { equipment, oversized } = mapEquipmentList(selectInventory(initialState), wallet)

    expect(equipment).toEqual([
      {
        amount: 100,
        name: MONEY,
        stackSize: 100,
        listItemId: 'key'
      },
      {
        amount: 50,
        name: MONEY,
        stackSize: 100,
        listItemId: 'key'
      },
      {
        amount: 5,
        itemId: 'torch',
        name: 'Torch',
        stackSize: 5,
        listItemId: 'key'
      }
    ])

    expect(oversized).toEqual([
      {
        encumbrance: 1,
        itemId: 'pavillion',
        listItemId: 'key',
        name: 'Pavillion'
      }
    ])
  });

  it('should work for non-full stacks', () => {
    function foo(): InventoryItem[] {
      return range(8).map((i: number): InventoryItem => ({
        itemId: 'torch',
        name: 'Torch',
        stackSize: 5,
        encumbrancePoints: 0.2,
        effects: [] as ItemEffect,
        type: 'item',
        instanceId: `${i}`
      }))
    }

    const { equipment, oversized } = mapEquipmentList(foo(), wallet)

    expect(equipment).toEqual([
      {
        amount: 100,
        name: MONEY,
        stackSize: 100,
        listItemId: 'key'
      },
      {
        amount: 50,
        name: MONEY,
        stackSize: 100,
        listItemId: 'key'
      },
      {
        amount: 5,
        itemId: 'torch',
        name: 'Torch',
        stackSize: 5,
        listItemId: 'key'
      },
      {
        amount: 3,
        itemId: 'torch',
        name: 'Torch',
        stackSize: 5,
        listItemId: 'key'
      }
    ])

    expect(oversized).toEqual([])
  });
});