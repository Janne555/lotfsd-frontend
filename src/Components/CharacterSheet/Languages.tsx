import React from 'react'
import { useSelector } from '../../hooks'
import { selectLanguages } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'
import partition from 'lodash/partition'
import range from 'lodash/range'

const useStyles = createUseStyles((theme: Theme) => ({
  languages: {
    border: theme.border,
    paddingTop: theme.padding,
    textAlign: 'center',
    maxWidth: 500
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    '& td': {
      border: '1px solid black',
      height: '1em'
    }
  },
  known: {
  },
  notKnown: {
  }
}))

export default function Languages() {
  const classes = useStyles()
  const [known, unknown] = partition(useSelector(selectLanguages), language => language.known)
  const size = Math.max(known.length, unknown.length, 7)

  return (
    <div className={classes.languages}>
      <h2>Languages</h2>
      <table className={classes.table}>
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
              <tr>
                <td>{known[i] ? known[i].name : ""}</td>
                <td>{unknown[i] ? unknown[i].name : ""}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
