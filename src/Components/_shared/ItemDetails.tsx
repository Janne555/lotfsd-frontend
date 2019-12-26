import React from 'react'
import { createUseStyles } from 'react-jss'
import { normalizeCamelCase } from '../../services'

const useStyles = createUseStyles((theme: Theme) => ({
  itemDetails: {

  }
}))

type Props = {
  item: Item
}

function ItemDetails({ item }: Props) {
  const classes = useStyles()
  return (
    <ul className={classes.itemDetails}>
      {
        pickDisplayProps(item).map(([key, value]) => (
          <li key={key}>
            <span>{key}: </span>
            <span>{value as any}</span>
          </li>
        ))
      }
      {item.encumbrance != null &&
        <li>
          Oversized
            </li>
      }
      {
        item.effects.map((effect, i) => (
          <li key={i}>
            {displayEffect(effect)}
          </li>
        ))
      }
    </ul>
  )
}

function pickDisplayProps(item: Item): [string, string][] {
  const { description, stackSize, type } = item
  return [
    ['Description', description],
    ['Stack Size', `${stackSize}`],
    ['Type', type]
  ]
}

function displayEffect(effect: ItemEffect) {
  switch (effect.type) {
    case "armorItemEffect":
      return displayArmorEffect(effect)
    case "weaponItemEffect":
      return undefined
    default:
      return undefined
  }

  function displayArmorEffect(acEffect: ArmorEffect) {
    const { method, value, target } = acEffect
    let foo = normalizeCamelCase(target.replace('AC', 'ArmorClass'))

    if (method === "modify") {
      if (value === 0) {
        return undefined
      }
      return `${value > 0 ? 'Increases' : 'Decreases'} ${foo} by ${value}`
    } else {
      return `Replaces ${foo} with ${value}`
    }
  }
}

export default ItemDetails