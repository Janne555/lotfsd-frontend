import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks/redux'
import { selectAttributes } from '../../Redux/selectors'
import { ATTRIBUTE_DETAILS } from '../../constants'

const useStyles = createUseStyles<string>((theme: Theme) => ({
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

function calculateModifier(value: number) {
  if (value < 4)
    return '-3'
  if (value > 3 && value < 6)
    return '-2'
  if (value > 5 && value < 9)
    return '-1'
  if (value > 8 && value < 13)
    return '0'
  if (value > 12 && value < 16)
    return '+1'
  if (value > 15 && value < 18)
    return '+2'
  return '+3'
}

const useAttributeStyles = createUseStyles<string>((theme: Theme) => ({
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