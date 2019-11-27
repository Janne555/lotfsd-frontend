import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks/redux'
import { selectAttributes } from '../../Redux/selectors'
import Attribute from './Attribute'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '40px 40px 40px auto',
    gridTemplateRows: '20px auto',
    gridColumnGap: 10,
    gridRowGap: 10,
    border: theme.border,
    padding: theme.padding
  },
  leftTitle: {
    gridRowStart: 2,
    gridRowEnd: (numItems: number) => numItems * 2 + 1,
    fontSize: '1.5em',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    alignSelf: 'center'
  },
  topTitle: {
    gridColumnStart: 4,
    fontSize: '1.5em'
  }
}))

export default function Attributes() {
  const attributes = useSelector<Attributes>(selectAttributes)
  const classes = useStyles(Object.keys(attributes).length)

  return (
    <div className={classes.root}>
      <span className={classes.leftTitle}>Ability Scores</span>
      <span className={classes.topTitle}>Modifiers</span>
      {
        Object.entries(attributes).map(([name, value], index) => (
          <Attribute key={name} title={name} score={value} index={index} />
        ))
      }
    </div>
  )
}