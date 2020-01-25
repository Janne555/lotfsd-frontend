import React from 'react'
import { createUseStyles } from 'react-jss'
import EffectsList from './EffectsList'
import { ItemQuery_item } from '../../../__generated__/apolloTypes/ItemQuery'

const useStyles = createUseStyles((theme: Theme) => ({
  itemDetails: {

  }
}))

type Props = {
  item: ItemQuery_item
}

function ItemDetails({ item }: Props) {
  const { description } = item
  const classes = useStyles()
  return (
    <div>
      <h3>Description</h3>
      <p>{description}</p>
      <h4>Details</h4>
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
        { item.effects &&
          <EffectsList effects={item.effects} />
        }
      </ul>
    </div>
  )
}

function pickDisplayProps(item: ItemQuery_item): [string, string][] {
  const { stackSize, type } = item
  return [
    ['Stack Size', `${stackSize}`],
    ['Type', type]
  ]
}

export default ItemDetails