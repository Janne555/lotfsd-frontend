import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectEquipment } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  equipment: {
    padding: theme.padding,
    border: theme.border,
    backgroundColor: theme.componentBackgroundColor,
    minHeight: theme.minHeight
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


function stackText(stackSize: number, amount: number) {
  return stackSize > 1 ? `${amount}/${stackSize}` : ''
}


export default function EquipmentList() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const { equipment, oversized } = useSelector(selectEquipment(characterId))
  return (
    <div className={classes.equipment}>
      <h2 className={classes.header}>Equipment</h2>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Stack size
            </th>
          </tr>
        </thead>
        <tbody>
          {
            equipment.map(({ name, listItemId, amount, stackSize }) => (
              <tr key={listItemId}>
                <td>{name}</td>
                <td>{stackText(stackSize, amount)}</td>
              </tr>
            ))
          }
          {
            oversized.map(({ name, listItemId }) => (
              <tr key={listItemId}>
                <td>{name}</td>
                <td>Oversized</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
