import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks/redux'
import { selectAttributes } from '../../Redux/selectors'
import { ATTRIBUTE_DETAILS } from '../../constants'
import { calculateModifier } from '../../services'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default function Attributes() {
  const attributes = useSelector<Attributes>(selectAttributes)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        Object.entries(attributes).map(([name, value]) => (
          <Attribute key={name} title={name} score={value} />
        ))
      }
    </div>
  )
}

const useAttributeStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '40px 40px 40px auto',
    gridColumnGap: 10
  },
  title: {
    gridColumnStart: 2,
    justifySelf: 'center'
  },
  scoreRoot: {
    border: theme.border,
    gridRowStart: 2,
    gridColumnStart: 2,
    justifySelf: 'center',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  score: {
    alignSelf: 'center'
  },
  modifierRoot: {
    gridRowStart: 2,
    gridColumnStart: 3,
    border: theme.border,
    borderRadius: '100%',
    margin: 1,
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40
  },
  modifier: {
    alignSelf: 'center'
  },
  details: {
    gridRowStart: 2,
    gridColumnStart: 4
  }
}))

type AttributeProps = {
  title: string
  score: number
}

function Attribute({ title, score }: AttributeProps) {
  const classes = useAttributeStyles()

  return (
    <div className={classes.root}>
      <label className={classes.title}>{title}</label>
      <div className={classes.scoreRoot}>
        <span className={classes.score}>{score}</span>
      </div>
      <div className={classes.modifierRoot}>
        <span className={classes.modifier}>{calculateModifier(score)}</span>
      </div>
      <span className={classes.details}>{ATTRIBUTE_DETAILS[title]}</span>
    </div>
  )
}