import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectEquipment } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import ModuleContainer from '../_shared/ModuleContainer'
import { useHistory } from 'react-router-dom'

const useStyles = createUseStyles((theme: Theme) => ({
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
  const { characterId, characterName } = useCharacterContext()
  const { equipment, oversized } = useSelector(selectEquipment(characterId))
  const history = useHistory()

  function handleAddClick() {
    history.push(`/characters/${characterName}/addItem`)
  }

  return (
    <ModuleContainer onAddClick={handleAddClick}>
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
    </ModuleContainer>
  )
}
