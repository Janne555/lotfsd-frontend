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

function isKeyOfCommonActivities(obj: unknown): obj is keyof CommonActivities {
  if (typeof obj !== 'string') {
    return false
  }

  return ["architecture",
    "bushcraft",
    "climbing",
    "languages",
    "openDoors",
    "search",
    "sleightOfHand",
    "sneakAttack",
    "stealth",
    "tinkering"].some(key => key === obj)
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