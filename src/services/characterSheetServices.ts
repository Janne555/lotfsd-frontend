import { BASE_ARMOR_CLASS, MONEY, SAVING_THROW_KEYS } from "../constants"
import { hasKey, isKeyOfAttributes } from "./typeGuards"
import partition from 'lodash/partition'
import { generate } from 'shortid'
import random from 'lodash/random'
import { CharacterSheetQuery_characterSheet_inventory } from "../../__generated__/apolloTypes/CharacterSheetQuery"
import { ItemsQuery_items } from "../../__generated__/apolloTypes/ItemsQuery"

function calculateAttributeModifiers(attributes: Attributes, effects?: AttributeModifierEffect[]): AttributeModifiers {
  return Object.keys(attributes).reduce((attributes, key) => {
    isKeyOfAttributes(key) && (attributes[key] = calculateModifier(attributes[key]) + sumOfEffectsFor(key))
    return attributes
  }, { ...attributes })

  function sumOfEffectsFor(key: keyof Attributes): number {
    return effects ? effects.reduce((sum, { value, target }) => target === key ? value + sum : sum, 0) : 0
  }
}

function calculateArmorClass(dexterityModifier: number, effects: ArmorClassEffect[], type: ArmorClassEffectTarget): number {
  const baseACEffect = effects.find(({ method }) => method === "override")
  const baseAC = baseACEffect ? baseACEffect.value : BASE_ARMOR_CLASS

  switch (type) {
    case "base":
      return baseAC + sumOfArmorClassEffects(effects, "base") + dexterityModifier
    case "ranged":
      return baseAC + sumOfArmorClassEffects(effects, "ranged") + dexterityModifier
    case "surprised":
      return baseAC - 2 + sumOfArmorClassEffects(effects, "surprised")
    case "withoutShield":
      return baseAC + dexterityModifier
  }
}

function sumOfArmorClassEffects(effects: ArmorClassEffect[], targetAC: ArmorClassEffectTarget) {
  return effects.filter(effect => effect.method !== 'override').reduce((sum, { value, target }) => target === targetAC ? value + sum : sum, 0)
}

function calculateMeleeAttackBonus(baseAttackBonus: number, strengthModifier: number) {
  return baseAttackBonus + strengthModifier
}

function calculateRangedAttackBonus(baseAttackBonus: number, dexterityModifier: number) {
  return baseAttackBonus + dexterityModifier
}

function calculateSavingThrows(savingThrows: SavingThrows, attributeModifiers: AttributeModifiers): SavingThrowsWithModifications {
  const {
    breathWeapon,
    magic,
    magicalDevice,
    paralyze,
    poison
  } = savingThrows
  const { wisdom, intelligence } = attributeModifiers

  return {
    breathWeapon: { base: breathWeapon, modified: breathWeapon - wisdom },
    magic: { base: magic, modified: magic - intelligence },
    magicalDevice: { base: magicalDevice, modified: magicalDevice - intelligence },
    paralyze: { base: paralyze, modified: paralyze - wisdom },
    poison: { base: poison, modified: poison - wisdom },
  }
}

function calculateModifier(value: number) {
  if (value < 4)
    return -3
  if (value > 3 && value < 6)
    return -2
  if (value > 5 && value < 9)
    return -1
  if (value > 8 && value < 13)
    return 0
  if (value > 12 && value < 16)
    return 1
  if (value > 15 && value < 18)
    return 2
  return 3
}

function calculateCommonActivities(commonActivities: CommonActivities, strengthModifier: number, intelligenceModifier: number, effects: CommonActivityEffect[]): CommonActivitiesWithModifications {
  return Object.keys(commonActivities).reduce((modifiedActivities, key) => {
    if (hasKey(commonActivities, key)) {
      modifiedActivities[key] = { base: commonActivities[key], modified: commonActivities[key] + sumOfEffectsForTarget(effects, key) + addModifier(key) }
    }
    return modifiedActivities
  }, {} as Record<keyof CommonActivities, { base: number, modified: number }>)

  function addModifier(key: keyof CommonActivities) {
    switch (key) {
      case 'languages':
        return intelligenceModifier
      case 'openDoors':
        return strengthModifier
      default:
        return 0
    }
  }
}

function sumOfEffectsForTarget(effects: Effect[], key: string) {
  return effects.reduce((sum, { value, target }) => target === key ? sum + value : sum, 0)
}

function partitionInventory(inventory: InventoryItem[]): [InventoryItem[], InventoryItem[]] {
  return partition(inventory, item => item.equipped)
}

function mapInventoryToEffects(inventory: InventoryItem[]): Effect[] {
  const [equipped, items] = partitionInventory(inventory)

  return mapEquippedToEffects().concat(mapItemsToEffects())

  function mapEquippedToEffects() {
    return equipped.reduce((effects, item) => {
      switch (item.type) {
        case "armor":
          effects.push(makeArmorClassEffect(item))
      }

      return effects
    }, [] as Effect[])
  }

  function mapItemsToEffects() {
    return items.reduce((effects, item) => {
      switch (item.type) {

      }

      return effects
    }, [] as Effect[])
  }
}

function makeArmorClassEffect(item: Armor): ArmorClassEffect {
  return {
    method: 'override',
    target: "base",
    type: "armorClassEffect",
    value: item.baseArmorClass
  }
}

function calculateEncumbrance(inventory: EquipmentListItem[], wallet: Wallet): number {
  const coinEncumbrancePoints = totalCoins(wallet) / 100
  let encumbrance = 0
  let encumbrancePoints = coinEncumbrancePoints - 10

  for (const item of inventory) {
    if (item.encumbrance != null)
      encumbrance += item.encumbrance
    else
      encumbrancePoints += item.encumbrancePoints
  }

  const encumbranceFromPoints = Math.ceil(encumbrancePoints / 5)

  return encumbrance + (encumbranceFromPoints > 0 ? encumbranceFromPoints : 0)
}

function totalCoins(wallet: Wallet): number {
  return Object.values(wallet).reduce((coins, value) => coins + value, 0)
}

function calculateEncumbranceDetails(encumbrance: number) {
  return {
    description: description(),
    explorationDistance: explorationDistance(),
    combatDistance: combatDistance(),
    dayDistance: dayDistance()
  }

  function description() {
    switch (encumbrance) {
      case 0:
      case 1:
        return "Unencumbered"
      case 2:
        return "Lightly Encumbered"
      case 3:
        return "Heavily Encumbered"
      case 4:
        return "Severly Encumbered"
      default:
        return "Overencumbered"
    }
  }

  function explorationDistance() {
    switch (encumbrance) {
      case 0:
      case 1:
        return 120
      case 2:
        return 90
      case 3:
        return 30
      case 4:
        return 30
      default:
        return 0
    }
  }

  function combatDistance() {
    return explorationDistance() / 3
  }

  function dayDistance() {
    return explorationDistance() / 10 * 2
  }
}

function mapEquipmentList(inventory: CharacterSheetQuery_characterSheet_inventory[], wallet: Wallet, itemIndex: ItemsQuery_items[]): EquipmentListItem[] {
  const mappedItems = inventory.map(({ id, itemId, ...rest }) => {
    const item = itemIndex.find(({ id: itemIndexId }) => itemIndexId === itemId)
    if (!item) {
      throw Error("Item not found")
    }
    return {
      instanceId: id,
      itemId,
      ...item,
      ...rest,
    }
  })

  let equipment: EquipmentListItem[] = createCoinListItems()
    .concat(inventoryListItems())

  return equipment.concat(oversized())

  function createCoinListItems(): EquipmentListItem[] {
    let coinListItems: EquipmentListItem[] = []

    let coins = totalCoins(wallet)
    do {
      const amount = coins > 100 ? 100 : coins
      coinListItems.push({
        name: MONEY,
        stackSize: 100,
        amount,
        listItemId: generate(),
        encumbrancePoints: 0.01
      })
      coins -= 100
    } while (coins > 0)

    return coinListItems
  }

  /**
   * puts items into buckets based on their id
   * filters out equipped and oversized (encumbrance defined) items
   */
  function bucketizeInventory() {
    let buckets: { [name: string]: typeof mappedItems } = {}
    for (const item of mappedItems) {
      if (item.equipped || item.encumbrance != null)
        continue
      if (!(item.itemId in buckets))
        buckets[item.itemId] = []
      buckets[item.itemId].push(item)
    }
    return buckets
  }

  function inventoryListItems() {
    return Object.values(bucketizeInventory()).reduce((listItems, bucket) => {
      let totalAmount = bucket.length
      const { stackSize, name, itemId } = bucket[0]

      do {
        const amount = totalAmount > stackSize ? stackSize : totalAmount
        listItems.push({
          amount,
          name,
          stackSize,
          itemId,
          listItemId: generate(), // TODO should be a stable id
          ...bucket[0]
        })
        totalAmount -= stackSize
      } while (totalAmount > 0)

      return listItems
    }, [] as EquipmentListItem[])
  }

  function oversized() {
    return mappedItems.reduce((items, item) => {
      if (!item.equipped && item.encumbrance != null)
        items.push({
          encumbrance: item.encumbrance,
          itemId: item.itemId,
          listItemId: generate(),
          name: item.name,
          ...item
        })
      return items
    }, [] as EquipmentListItem[])
  }
}

function randomAttributes(): Attributes {
  let attributes: Attributes = {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  }

  do {
    attributes = {
      charisma: random(3, 18),
      constitution: random(3, 18),
      dexterity: random(3, 18),
      intelligence: random(3, 18),
      strength: random(3, 18),
      wisdom: random(3, 18)
    }
  } while (Object.values(calculateAttributeModifiers(attributes, []))
    .reduce((sum, value) => sum + value) < 0)

  return attributes
}

export {
  calculateAttributeModifiers,
  calculateMeleeAttackBonus,
  calculateRangedAttackBonus,
  calculateSavingThrows,
  calculateArmorClass,
  calculateCommonActivities,
  mapInventoryToEffects,
  calculateEncumbrance,
  calculateEncumbranceDetails,
  mapEquipmentList,
  calculateModifier,
  randomAttributes
}