import React from 'react'
import { useSelector } from '../../hooks'
import { selectEquipment } from '../../Redux/selectors'
import ListItem from './EquipmentListItem'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  equipment: {
    padding: theme.padding,
    border: theme.border,
    maxWidth: 300
  },
  table: {
    gridColumnTemplate: '',
    borderCollapse: 'collapse',
    '& td, th': {
      borderBottom: '1px solid black',
      borderTop: '1px solid black'
    },
    '& td:first-child, th:first-child': {
      borderLeft: '1px solid black'
    },
    '& td:last-child, th:last-child': {
      borderRight: '1px solid black'
    },
    '& td:nth-child(3)': {
      border: '1px solid black'
    }
  }
}))

export default function EquipmentList() {
  const classes = useStyles()
  const { equipment, oversized } = useSelector(selectEquipment)

  return (
    <div className={classes.equipment}>
      <h2>Equipment</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            equipment.map((item, index) => <ListItem key={item.listItemId} item={item} position={index} />)
          }
        </tbody>
      </table>
    </div>
  )
}
