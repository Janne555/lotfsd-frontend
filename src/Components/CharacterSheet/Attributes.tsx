import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks/redux'
import { selectAttributes } from '../../Redux/selectors'
import { ATTRIBUTE_DETAILS } from '../../constants'

const useStyles = createUseStyles({

})

export default function Attributes() {
  const attributes = useSelector<Attributes>(selectAttributes)

  return (
    <div>
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
    display: 'flex'
  },
  title: {

  },
  score: {

  },
  scoreValue: {
    border: theme.border,
    padding: 10
  },
  modifier: {

  },
  details: {

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
      <div className={classes.score}>
        <label className={classes.title}>{title}</label>
        <span className={classes.scoreValue}>{score}</span>
      </div>
      <span className={classes.modifier}>{calculateModifier(score)}</span>
      <span className={classes.details}>{ATTRIBUTE_DETAILS[title]}</span>
    </div>
  )
}