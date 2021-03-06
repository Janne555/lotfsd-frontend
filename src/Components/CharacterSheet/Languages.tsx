import React from 'react'
import { createUseStyles } from 'react-jss'
import partition from 'lodash/partition'
import range from 'lodash/range'
import NoContent from '../_shared/NoContent'
import ModuleContainer from '../_shared/ModuleContainer'
import { useHistory } from 'react-router-dom'

const useStyles = createUseStyles((theme: Theme) => ({
  languages: {
    textAlign: 'center'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    '& tr > td:first-child': {
      borderRight: '1px solid black'
    },
    '& td': {
      height: '1em'
    }
  },
  known: {
  },
  notKnown: {
  }
}))

type Props = {
  languages: Language[]
  characterName: string
}

function Languages({ languages, characterName }: Props) {
  const classes = useStyles()
  const history = useHistory()
  const [known, unknown] = partition(languages, language => language.known)
  const size = Math.max(known.length, unknown.length, 7)

  function handleAddClick() {
    history.push(`/characters/${characterName}/addLanguage`)
  }

  return (
    <ModuleContainer onAddClick={handleAddClick}>
      <div className={classes.languages}>
        <h2>Languages</h2>
        {languages.length === 0
          ? <NoContent />
          : <table className={classes.table}>
            <thead>
              <tr>
                <th>
                  Known
            </th>
                <th>
                  Not Known
            </th>
              </tr>
            </thead>
            <tbody>
              {
                range(size).map((i) => (
                  <tr key={i}>
                    <td>{known[i] ? known[i].name : ""}</td>
                    <td>{unknown[i] ? unknown[i].name : ""}</td>
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

export default Languages