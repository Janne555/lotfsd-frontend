import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectRetainers } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import { RETAINER_KEYS } from '../../constants'
import NoContent from '../_shared/NoContent'
import ModuleContainer from '../_shared/ModuleContainer'
import { useHistory } from 'react-router-dom'

const useStyles = createUseStyles((theme: Theme) => ({
  retainers: {
    overflow: 'scroll',
    '& h2': {
      textAlign: 'center'
    },
    '& table': {
      borderCollapse: 'collapse',
      width: '100%'
    },
    '& th': {
      // textAlign: 'center',
    },
    '& td': {
      borderTop: '1px solid black'
    }
  },
  level: {
    textAlign: 'center'
  },
  name: {
  },
  position: {
  },
  class: {
  },
  hitpoints: {
    textAlign: 'center'
  },
  wage: {
    textAlign: 'center'
  },
  share: {
    textAlign: 'center'
  }
}))

export default function Retainers() {
  const classes = useStyles()
  const { characterId, characterName } = useCharacterContext()
  const retainers = useSelector(selectRetainers(characterId))
  const history = useHistory()

  function handleAddClick() {
    history.push(`/characters/${characterName}/addRetainer`)
  }

  return (
    <ModuleContainer onAddClick={handleAddClick}>
      <div className={classes.retainers}>
        <h2>Retainers</h2>
        {retainers.length === 0
          ? <NoContent />
          : <table className="">
            <thead>
              <tr>
                {
                  RETAINER_KEYS.map(key => <th key={key}>{key}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                retainers.map(retainer => (
                  <tr key={retainer.uuid}>
                    {
                      RETAINER_KEYS.map(key => <td className={classes[key]} key={key}>{retainer[key]}</td>)
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>
    </ModuleContainer>
  )
}
