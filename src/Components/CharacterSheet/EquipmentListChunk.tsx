import React from 'react'
import { createUseStyles } from 'react-jss'
import ListItem from './EquipmentListItem'
import range from 'lodash/range'

const useStyles = createUseStyles((theme: Theme) => ({
  chunk: {
    display: 'grid',
    border: '1px solid black'
  },
  sidebar: {
    gridColumnStart: '4',
    gridRowStart: (index: number) => index + 1,
    gridRowEnd: (index: number) => index + 6,
    justifySelf: 'center',
    alignSelf: 'center',
    transform: 'rotate(90deg)'
  }
}))

type Props = {
  position: number
  chunk?: EquipmentListItem[]
  oversizedItem?: EquipmentListItemOversized
}

export default function EquipmentListChunk({ chunk, oversizedItem, position }: Props) {
  const classes = useStyles(position)

  if (chunk) {
    return (
      <div className={classes.chunk}>
        {
          chunk.map((item, index) => <ListItem key={item.listItemId} item={item} position={index + position * 5} />)
        }
        {chunk.length < 5 &&
          range(5 - chunk.length).map((i) => <ListItem key="a" label=" " position={i + position + 5} />)
        }
        <span className={classes.sidebar}>+1 Enc</span>
      </div>
    )
  } else if (oversizedItem) {
    return (
      <div className={classes.chunk}>
        {range(5).map((i) => <ListItem key="a" label={oversizedItem.name} padding={i > 0} position={0} />)}
      </div>
    )
  } else {
    return null
  }
}