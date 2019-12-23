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
  return null
}