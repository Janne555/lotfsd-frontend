function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}

function isArmor(equipment: Item): equipment is Armor {
  return equipment.type === "armor"
}

function isAttributeModifierEffect(effect: Effect): effect is AttributeModifierEffect {
  return effect.type === 'attributeModifierEffect'
}

function isArmorClassEffect(effect: Effect): effect is ArmorClassEffect {
  return effect.type === 'armorClassEffect'
}

function isCommonActivityEffect(effect: Effect): effect is CommonActivityEffect {
  return effect.type === "commonActivityEffect"
}

function areOnlyAttributes(obj: any): obj is Attributes {
  if (Object.keys(obj).length !== 6) {
    return false
  }

  return ['charisma', 'constitution', 'dexterity', 'intelligence', 'strength', 'wisdom'].every(key => key in obj)
}

function isItemType(s: any): s is Item['type'] {
  return ['item', 'armor', 'weapon'].includes(s)
}

function isKeyOfSavingThrows(obj: unknown): obj is keyof SavingThrows {
  if (typeof obj !== "string") {
    return false
  }

  return ["paralyze", "poison", "breathWeapon", "magicalDevice", "magic"].some(key => key === obj);
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

export {
  hasKey,
  isArmor,
  isAttributeModifierEffect,
  isArmorClassEffect,
  isCommonActivityEffect,
  areOnlyAttributes,
  isItemType,
  isKeyOfSavingThrows,
  isCharacter
}