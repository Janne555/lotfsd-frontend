import { ATTRIBUTE_KEYS, COMMON_ACTIVITY_KEYS, SAVING_THROW_KEYS } from "../constants"

function isNonNullObject(obj: unknown): obj is object {
  if (typeof obj !== "object") {
    return false
  }

  if (!obj) {
    return false
  }

  return true
}

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}

function isArmor(equipment: Item): equipment is Armor {
  return equipment.type === "armor"
}

function isAttributeModifierEffect(obj: unknown): obj is AttributeModifierEffect {
  if (!isNonNullObject(obj)) {
    return false
  }

  const temp = obj as AttributeModifierEffect

  if (!ATTRIBUTE_KEYS.some(key => key === temp.target)) {
    return false
  }

  if (typeof temp.value !== "number") {
    return false
  }

  return temp.type === 'attributeModifierEffect'
}

function isArmorClassEffect(obj: unknown): obj is ArmorClassEffect {
  if (!isNonNullObject(obj)) {
    return false
  }

  const temp = obj as ArmorClassEffect

  if (!["modify", "override"].some(method => temp.method === method)) {
    return false
  }

  if (!["base", "ranged", "surprised", "withoutShield"].some(target => temp.target === target)) {
    return false
  }

  if (typeof temp.value !== "number") {
    return false
  }

  return temp.type === 'armorClassEffect'
}

function isCommonActivityEffect(obj: unknown): obj is CommonActivityEffect {
  if (!isNonNullObject(obj)) {
    return false
  }

  const temp = obj as CommonActivityEffect

  if (!COMMON_ACTIVITY_KEYS.some(target => temp.target === target)) {
    return false
  }

  if (typeof temp.value !== "number") {
    return false
  }

  return temp.type === 'commonActivityEffect'
}

function isKeyOfAttributes(obj: any): obj is keyof Attributes {
  return ['charisma', 'constitution', 'dexterity', 'intelligence', 'strength', 'wisdom'].some(key => key === obj)
}

function isItemType(s: any): s is Item['type'] {
  return ['item', 'armor', 'weapon'].includes(s)
}

function isKeyOfSavingThrows(obj: unknown): obj is keyof SavingThrows {
  if (typeof obj !== "string") {
    return false
  }

  return SAVING_THROW_KEYS.some(key => key === obj);
}

function isCharacter(obj: unknown): obj is Character {
  if (typeof obj !== "object") {
    return false
  }

  if (!obj) {
    return false
  }

  const foo = obj as Character

  if (!foo.name || !foo.class || !foo.id) {
    return false
  }

  return true
}

function isKeyOfCommonActivities(obj: unknown): obj is keyof CommonActivities {
  if (typeof obj !== 'string') {
    return false
  }

  return COMMON_ACTIVITY_KEYS.some(key => key === obj)
}

export {
  hasKey,
  isArmor,
  isAttributeModifierEffect,
  isArmorClassEffect,
  isCommonActivityEffect,
  isKeyOfAttributes,
  isItemType,
  isKeyOfSavingThrows,
  isCharacter,
  isKeyOfCommonActivities
}