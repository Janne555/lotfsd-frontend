import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectEquipment } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import ModuleContainer from '../_shared/ModuleContainer'
import { useHistory } from 'react-router-dom'
import partition from 'lodash/partition'

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


function stackText(stackSize?: number, amount?: number) {
  if (!stackSize) {
    return ""
  }
  return stackSize > 1 ? `${amount}/${stackSize}` : ''
}


function EquipmentList() {
  const classes = useStyles()
  const { characterId, characterName } = useCharacterContext()
  const [weapons, equipment] = partition(useSelector(selectEquipment(characterId)), item => item.type === 'weapon')

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
        </tbody>
      </table>
      <h3>Weapons</h3>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Damage
            </th>
          </tr>
        </thead>
        <tbody>
          {
            weapons.map(({ name, listItemId, amount, stackSize, damage }: any) => (
              <tr key={listItemId}>
                <td>{name}</td>
                <td>{damage}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </ModuleContainer>
  )
}

export default EquipmentList