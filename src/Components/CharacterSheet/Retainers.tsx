import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectRetainers } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import { RETAINER_KEYS } from '../../constants'

const useStyles = createUseStyles((theme: Theme) => ({
  retainers: {
    border: theme.border,
    paddingTop: theme.padding,
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
    },
    backgroundColor: theme.componentBackgroundColor
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
  const { characterId } = useCharacterContext()
  const retainers = useSelector(selectRetainers(characterId))

  return (
    <div className={classes.retainers}>
      <h2>Retainers</h2>
      <table className="">
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
              <tr>
                {
                  RETAINER_KEYS.map(key => <td className={classes[key]} key={key}>{retainer[key]}</td>)
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
