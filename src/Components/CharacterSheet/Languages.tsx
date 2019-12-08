import React from 'react'
import { useSelector } from '../../hooks'
import { selectLanguages } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  languages: {
    display: 'grid',
    gridAutoFlow: 'dense',
    border: theme.border,
    paddingTop: theme.padding,
    textAlign: 'center',
    '& h2': {
      gridColumnStart: 1,
      gridColumnEnd: 3,
    }
  },
  known: {
    gridColumnStart: 1,
    border: '1px solid black'
  },
  notKnown: {
    gridColumnStart: 2,
    border: '1px solid black'
  }
}))

export default function Languages() {
  const classes = useStyles()
  const languages = useSelector(selectLanguages)
  return (
    <div className={classes.languages}>
      <h2>Languages</h2>
      <h3>Known</h3>
      <h3>Not Known</h3>
      {
        languages.map(({ name, known }) => <div key={name} className={known ? classes.known : classes.notKnown}>{name}</div>)
      }
    </div>
  )
}
