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
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    '& td': {
      borderBottom: '1px solid black',
    },
    '& th': {
      textAlign: 'left'
    }
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
      <table className={classes.table}>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Stack size
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {
            equipment.map(({ name, listItemId, amount, stackSize, description }) => (
              <tr key={listItemId}>
                <td>{name}</td>
                <td>{stackText(stackSize, amount)}</td>
                <td>{description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h3>Weapons</h3>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              AB
            </th>
            <th>
              Damage
            </th>
            <th>
              Range
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {
            weapons.map(({ name, listItemId, amount, stackSize, damage, attackBonus, range, description }: any) => (
              <tr key={listItemId}>
                <td>{name}</td>
                <td>{attackBonus}</td>
                <td>{damage}</td>
                <td>{rangeToString(range)}</td>
                <td>{description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </ModuleContainer>
  )
}

function rangeToString({ long, medium, short }: Weapon['range']) {
  let parts: string[] = []

  if (short) {
    parts.push(`S: ${short}`)
  }

  if (medium) {
    parts.push(`M: ${medium}`)
  }

  if (long) {
    parts.push(`L: ${long}`)
  }


  return parts.join(", ")
}

export default EquipmentList