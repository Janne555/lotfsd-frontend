import React from 'react'
import { createUseStyles } from 'react-jss'
import ModuleContainer from '../_shared/ModuleContainer'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectProperties } from '../../Redux/selectors'

const useStyles = createUseStyles((theme: Theme) => ({
  properties: {
    '& h2': {
      textAlign: 'center'
    }
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

type Props = {

}

function Properties({ }: Props) {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const properties = useSelector(selectProperties(characterId))

  return (
    <ModuleContainer>
      <div className={classes.properties}>
        <h2>Properties</h2>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Value</th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody>
            {
              properties.map(({ id, name, location, rent, value }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{value}</td>
                  <td>{rent}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </ModuleContainer>
  )
}

export default Properties