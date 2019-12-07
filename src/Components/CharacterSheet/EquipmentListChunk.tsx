import React from 'react'
import { createUseStyles } from 'react-jss'
import ListItem from './EquipmentListItem'
import range from 'lodash/range'

const useStyles = createUseStyles((theme: Theme) => ({
  chunk: {
    display: 'grid'
  }
}))

type Props = {
  position: number
  chunk?: EquipmentListItem[]
  oversizedItem?: EquipmentListItemOversized
}

export default function EquipmentListChunk({ chunk, oversizedItem, position }: Props) {
  const classes = useStyles()

  if (chunk) {
    return (
      <div className={classes.chunk}>
        {
          chunk.map((item, index) => <ListItem key={item.listItemId} item={item} position={index + position * 5} />)
        }
      </div>
    )
  } else if (oversizedItem) {
    return (
      <div className={classes.chunk}>
        {range(5).map((i) => <ListItem key="a" label={i > 0 ? undefined : oversizedItem.name} position={0} />)}
      </div>
    )
  } else {
    return null
  }
}


function Foo() {
  return (
    <>
      <div></div>
    </>
  )
}