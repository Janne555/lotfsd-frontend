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
import { selectCharacterId } from "./system"

const attributes = (state: RootState): Attributes => state.characterSheet.attributes.byId[selectCharacterId(state)]

const attributeModifierEffects = (state: RootState): AttributeModifierEffect[] => state.characterSheet.effects.byId[selectCharacterId(state)].effects.filter(isAttributeModifierEffect)

const effects = (state: RootState): Effect[] => {
  return state.characterSheet.effects.byId[selectCharacterId(state)].effects
    .concat(mapInventoryToEffects(inventory(state)))
}

const armorClassEffects = (state: RootState): ArmorClassEffect[] => effects(state).filter(isArmorClassEffect)

const commonActivityEffects = (state: RootState): CommonActivityEffect[] => state.characterSheet.effects.byId[selectCharacterId(state)].effects.filter(isCommonActivityEffect)

const attributeModifiers = (state: RootState): AttributeModifiers => calculateAttributeModifiers(attributes(state), attributeModifierEffects(state))

const savingThrows = (state: RootState): Record<keyof SavingThrows, [number, number]> => calculateSavingThrows(state.characterSheet.savingThrows.byId[selectCharacterId(state)], attributeModifiers(state))

const maxHP = (state: RootState): number => state.characterSheet.maxHp.byId[selectCharacterId(state)].maxHp

const currentHP = (state: RootState): number => state.characterSheet.currentHp.byId[selectCharacterId(state)].currentHp

const baseAttackBonus = (state: RootState): number => state.characterSheet.attackBonus.byId[selectCharacterId(state)].attackBonus

const meleeAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(baseAttackBonus(state), attributeModifiers(state).strength)

const rangedAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(baseAttackBonus(state), attributeModifiers(state).dexterity)

const surpriseChance = (state: RootState): number => state.characterSheet.surpriseChance.byId[selectCharacterId(state)].surpriseChance

const baseArmorClass = (state: RootState): number => calculateArmorClass(attributeModifiers(state).dexterity, armorClassEffects(state), "base")

const rangedArmorClass = (state: RootState): number => calculateArmorClass(attributeModifiers(state).dexterity, armorClassEffects(state), "ranged")

const withoutShieldArmorClass = (state: RootState): number => calculateArmorClass(attributeModifiers(state).dexterity, armorClassEffects(state), "withoutShield")

const surprisedArmorClass = (state: RootState): number => calculateArmorClass(attributeModifiers(state).dexterity, armorClassEffects(state), "surprised")

const commonActivities = (state: RootState): CommonActivities => calculateCommonActivities(state.characterSheet.commonActivities.byId[selectCharacterId(state)], attributeModifiers(state).strength, attributeModifiers(state).intelligence, commonActivityEffects(state))

const wallet = (state: RootState): Wallet => state.characterSheet.wallet.byId[selectCharacterId(state)]

const inventory = (state: RootState): InventoryItem[] => {
  //TODO must make sure there are never instances of items not in the item index
  return state.characterSheet.inventory.byId[selectCharacterId(state)].inventory.map(instance => ({ ...instance, ...state.itemIndex.byId[instance.itemId] }))
}

const encumbrance = (state: RootState): number => calculateEncumbrance(inventory(state), wallet(state))

const encumbranceDetails = (state: RootState) => calculateEncumbranceDetails(encumbrance(state))

const equipment = (state: RootState) => mapEquipmentList(inventory(state), wallet(state))

const languages = (state: RootState): Language[] => state.characterSheet.languages.byId[selectCharacterId(state)].languages

const retainers = (state: RootState): Retainer[] => state.characterSheet.retainers.byId[selectCharacterId(state)].retainers

const combatOptions = (state: RootState): CombatOptions => state.characterSheet.combatOptions.byId[selectCharacterId(state)]

const info = (state: RootState): Info => state.characterSheet.info.byId[selectCharacterId(state)]

export {
  attributes as selectAttributes,
  savingThrows as selectSavingThrows,
  currentHP as selecCurrentHP,
  maxHP as selectMaxHP,
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
  info as selectInfo
}