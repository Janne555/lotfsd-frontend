import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectEquipment } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import EquipmentListChunk from './EquipmentListChunk'
import chunk from 'lodash/chunk'
import EquipmentListItem from './EquipmentListItem'

const useStyles = createUseStyles((theme: Theme) => ({
  equipment: {
    padding: theme.padding,
    border: theme.border,
    backgroundColor: theme.componentBackgroundColor
  },
  header: {
    textAlign: 'center'
  },
  list: {
    display: 'flex',
    listStyleType: 'none',
    flexDirection: 'column'
  }
}))

export default function EquipmentList() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const { equipment, oversized } = useSelector(selectEquipment(characterId))
  return (
    <div className={classes.equipment}>
      <h2 className={classes.header}>Equipment</h2>
      <ul className={classes.list}>
        <EquipmentListItem key="default" />
        {
          equipment.map((item, index) => <EquipmentListItem key={item.listItemId} item={item} position={index + 1} />)
        }
      </ul>
    </div>
  )
}
