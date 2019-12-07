import React from 'react'
import { useSelector } from '../../hooks'
import { selectEquipment } from '../../Redux/selectors'
import ListItem from './EquipmentListItem'
import { createUseStyles } from 'react-jss'
import EquipmentListChunk from './EquipmentListChunk'
import chunk from 'lodash/chunk'

const useStyles = createUseStyles((theme: Theme) => ({
  equipment: {
    padding: theme.padding,
    border: theme.border,
    maxWidth: 300
  },
  table: {
  }
}))

export default function EquipmentList() {
  const classes = useStyles()
  const { equipment, oversized } = useSelector(selectEquipment)

  return (
    <div className={classes.equipment}>
      <h2>Equipment</h2>
      <div className={classes.table}>
        {
          chunk(equipment, 5).map((chunk, index) => <EquipmentListChunk key={index} chunk={chunk} position={index} />)
        }
        {
          oversized.map((oversized, index) => <EquipmentListChunk key={index} oversizedItem={oversized} position={index} />)
        }
      </div>
    </div>
  )
}
