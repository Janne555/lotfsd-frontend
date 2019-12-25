import React from 'react'
import { useSelector, useCharacterContext, useDispatch } from '../../hooks'
import { selectLanguages } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import partition from 'lodash/partition'
import range from 'lodash/range'
import NoContent from '../_shared/NoContent'
import ModuleContainer from '../_shared/ModuleContainer'
import { openModalWith } from '../../Redux/actions'

const useStyles = createUseStyles((theme: Theme) => ({
  languages: {
    textAlign: 'center'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    '& td': {
      border: '1px solid black',
      height: '1em',
      borderLeft: 'none'
    }
  },
  known: {
  },
  notKnown: {
  }
}))

export default function Languages() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { characterId } = useCharacterContext()
  const languages = useSelector(selectLanguages(characterId))
  const [known, unknown] = partition(languages, language => language.known)
  const size = Math.max(known.length, unknown.length, 7)

  function handleAddClick() {
    dispatch(openModalWith("addLanguage"))
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
