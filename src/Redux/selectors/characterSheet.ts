import {
  calculateSavingThrows,
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

const commonActivityEffects = (characterId: string) =>
  (state: RootState): CommonActivityEffect[] =>
    state.characterSheet.effects.byId[characterId].effects.filter(isCommonActivityEffect)

const attributeModifiers = (characterId: string) =>
  (state: RootState): AttributeModifiers =>
    calculateAttributeModifiers(attributes(characterId)(state), attributeModifierEffects(characterId)(state))

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
    
const properties = (characterId: string) =>
  (state: RootState): Property[] =>
    state.characterSheet.properties.byId[characterId].properties

export {
  attributes as selectAttributes,
  attributeModifierEffects as selectAttributeModifierEffects,
  attributeModifiers as selectAttributeModifiers,
  wallet as selectWallet,
  encumbrance as selectEncumbrance,
  encumbranceDetails as selectEncumbranceDetails,
  inventory as selectInventory,
  equipment as selectEquipment,
  languages as selectLanguages,
  retainers as selectRetainers,
  combatOptions as selectCombatOptions,
  properties as selectProperties
}