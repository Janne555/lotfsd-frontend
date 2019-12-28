import {
  calculateSavingThrows,
  calculateMeleeAttackBonus,
  isAttributeModifierEffect,
  calculateAttributeModifiers,
  isArmorClassEffect,
  calculateArmorClass,
  calculateCommonActivities,
  isCommonActivityEffect,
  mapInventoryToEffects,
  calculateEncumbrance,
  calculateEncumbranceDetails,
  mapEquipmentList
} from "../../services"
import { selectItemIndexById } from "."

import omit from 'lodash/omit'

const attributes = (characterId: string) =>
  (state: RootState): CharacterId & Attributes =>
    state.characterSheet.attributes.byId[characterId]

const attributeModifierEffects = (characterId: string) =>
  (state: RootState): AttributeModifierEffect[] =>
    state.characterSheet.effects.byId[characterId].effects.filter(isAttributeModifierEffect)

const effects = (characterId: string) =>
  (state: RootState): Effect[] => {
    return state.characterSheet.effects.byId[characterId].effects
      .concat(mapInventoryToEffects(inventory(characterId)(state)))
  }

const armorClassEffects = (characterId: string) =>
  (state: RootState): ArmorClassEffect[] =>
    effects(characterId)(state).filter(isArmorClassEffect)

const commonActivityEffects = (characterId: string) =>
  (state: RootState): CommonActivityEffect[] =>
    state.characterSheet.effects.byId[characterId].effects.filter(isCommonActivityEffect)

const attributeModifiers = (characterId: string) =>
  (state: RootState): AttributeModifiers =>
    calculateAttributeModifiers(attributes(characterId)(state), attributeModifierEffects(characterId)(state))

const savingThrows = (characterId: string) =>
  (state: RootState): Record<keyof SavingThrows, [number, number]> =>
    calculateSavingThrows(state.characterSheet.savingThrows.byId[characterId], attributeModifiers(characterId)(state))

const maxHp = (characterId: string) =>
  (state: RootState): number =>
    state.characterSheet.info.byId[characterId].maxHp

const currentHp = (characterId: string) =>
  (state: RootState): number =>
    state.characterSheet.info.byId[characterId].currentHp

const baseAttackBonus = (characterId: string) =>
  (state: RootState): number =>
    state.characterSheet.info.byId[characterId].attackBonus

const meleeAttackBonus = (characterId: string) =>
  (state: RootState): number =>
    calculateMeleeAttackBonus(baseAttackBonus(characterId)(state), attributeModifiers(characterId)(state).strength)

const rangedAttackBonus = (characterId: string) =>
  (state: RootState): number =>
    calculateMeleeAttackBonus(baseAttackBonus(characterId)(state), attributeModifiers(characterId)(state).dexterity)

const surpriseChance = (characterId: string) =>
  (state: RootState): number =>
    state.characterSheet.info.byId[characterId].surpriseChance

const baseArmorClass = (characterId: string) =>
  (state: RootState): number =>
    calculateArmorClass(attributeModifiers(characterId)(state).dexterity, armorClassEffects(characterId)(state), "base")

const rangedArmorClass = (characterId: string) =>
  (state: RootState): number =>
    calculateArmorClass(attributeModifiers(characterId)(state).dexterity, armorClassEffects(characterId)(state), "ranged")

const withoutShieldArmorClass = (characterId: string) =>
  (state: RootState): number =>
    calculateArmorClass(attributeModifiers(characterId)(state).dexterity, armorClassEffects(characterId)(state), "withoutShield")

const surprisedArmorClass = (characterId: string) =>
  (state: RootState): number =>
    calculateArmorClass(attributeModifiers(characterId)(state).dexterity, armorClassEffects(characterId)(state), "surprised")

const commonActivities = (characterId: string) =>
  (state: RootState): Record<keyof CommonActivities, { base: number, modified: number }> =>
    calculateCommonActivities(state.characterSheet.commonActivities.byId[characterId], attributeModifiers(characterId)(state).strength, attributeModifiers(characterId)(state).intelligence, commonActivityEffects(characterId)(state))

const wallet = (characterId: string) =>
  (state: RootState): Wallet =>
    omit(state.characterSheet.wallet.byId[characterId], 'characterId')

const inventory = (characterId: string) =>
  (state: RootState): InventoryItem[] => {
    //TODO must make sure there are never instances of items not in the item index
    return state.characterSheet.inventory.byId[characterId].inventory.map(instance =>
      ({ ...instance, ...state.itemIndex.byId[instance.itemId] }))
  }

const encumbrance = (characterId: string) =>
  (state: RootState): number =>
    calculateEncumbrance(inventory(characterId)(state), wallet(characterId)(state))

const encumbranceDetails = (characterId: string) =>
  (state: RootState) =>
    calculateEncumbranceDetails(encumbrance(characterId)(state))

const equipment = (characterId: string) =>
  (state: RootState) =>
    mapEquipmentList(inventory(characterId)(state), wallet(characterId)(state), selectItemIndexById(state))

const languages = (characterId: string) =>
  (state: RootState): Language[] =>
    state.characterSheet.languages.byId[characterId].languages

const retainers = (characterId: string) =>
  (state: RootState): Retainer[] =>
    state.characterSheet.retainers.byId[characterId].retainers

const combatOptions = (characterId: string) =>
  (state: RootState): CharacterId & CombatOptions =>
    state.characterSheet.combatOptions.byId[characterId]

const info = (characterId: string) =>
  (state: RootState): InfoBarData => {
    return omit(state.characterSheet.info.byId[characterId], ['maxHp', 'currentHp', 'attackBonus', 'surpriseChance', 'characterId'])
  }

const className = (characterId?: string) =>
  (state: RootState): string | undefined =>
    characterId ? state.characterSheet.info.byId[characterId].class : undefined

const properties = (characterId: string) =>
  (state: RootState): Property[] =>
    state.characterSheet.properties.byId[characterId].properties

export {
  attributes as selectAttributes,
  savingThrows as selectSavingThrows,
  currentHp as selecCurrentHp,
  maxHp as selectMaxHp,
  meleeAttackBonus as selectMeleeAttackBonus,
  rangedAttackBonus as selectRangedAttackBonus,
  baseAttackBonus as selectBaseAttackBonus,
  surpriseChance as selectSurpriseChance,
  baseArmorClass as selectBaseArmorClass,
  attributeModifierEffects as selectAttributeModifierEffects,
  attributeModifiers as selectAttributeModifiers,
  rangedArmorClass as selectRangedArmorClass,
  withoutShieldArmorClass as selectWithoutShieldArmorClass,
  surprisedArmorClass as selectSurprisedArmorClass,
  commonActivities as selectCommonActivities,
  effects as selectEffects,
  wallet as selectWallet,
  encumbrance as selectEncumbrance,
  encumbranceDetails as selectEncumbranceDetails,
  inventory as selectInventory,
  equipment as selectEquipment,
  languages as selectLanguages,
  retainers as selectRetainers,
  combatOptions as selectCombatOptions,
  info as selectInfo,
  className as selectClass,
  properties as selectProperties
}