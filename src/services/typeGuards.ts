function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}

function isArmor(equipment: Equipment): equipment is Armor {
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

export {
  hasKey,
  isArmor,
  isAttributeModifierEffect,
  isArmorClassEffect,
  isCommonActivityEffect
}