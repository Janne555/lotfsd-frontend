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

function isItemType(s: any): s is (Pick<Item, 'type'>) {
  return ['item', 'armor', 'weapon'].includes(s)
}

export {
  hasKey,
  isArmor,
  isAttributeModifierEffect,
  isArmorClassEffect,
  isCommonActivityEffect,
  areOnlyAttributes,
  isItemType
}