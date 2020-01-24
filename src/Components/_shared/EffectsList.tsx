import React from 'react'
import { normalizeCamelCase } from '../../services'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { createUseStyles } from 'react-jss'
import { ItemQuery_item_effects } from '../../constants/queries/__generated__/ItemQuery'

const useStyles = createUseStyles((theme: Theme) => ({
  effectsListItem: {
    display: 'grid',
    gridTemplateColumns: '5% 5% 5% auto',
    '& > span': {
      gridColumnStart: 4
    }
  }
}))

type Props = {
  effects: ItemQuery_item_effects[]
  onEdit?: (id: string) => void
  onRemove?: (id: string) => void
}

function EffectsList({ effects }: Props) {
  const classes = useStyles()

  return (
    <>
      {
        effects.map(effect => (
          <li className={classes.effectsListItem} key={effect.id}>
            <IconButton size="small">
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <span>{displayEffect(effect)}</span>
          </li>
        ))
      }
    </>
  )
}

export default EffectsList

function displayEffect(effect: ItemQuery_item_effects) {
  switch (effect.type) {
    case "armorItemEffect":
      return displayArmorEffect(effect)
    case "weaponItemEffect":
      return undefined
    default:
      return undefined
  }

  function displayArmorEffect(acEffect: ItemQuery_item_effects) {
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
