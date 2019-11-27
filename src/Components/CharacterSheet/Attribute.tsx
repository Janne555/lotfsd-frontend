
import React from 'react'
import { createUseStyles } from 'react-jss'
import { ATTRIBUTE_DETAILS } from '../../constants'
import { calculateModifier } from '../../services'

type AttributeProps = {
  title: string
  score: number
  index: number
}

const useAttributeStyles = createUseStyles((theme: Theme) => ({
  title: {
    gridColumnStart: 2,
    gridRowStart: (index: number) => (index + 1) * 2 - 1,
    justifySelf: 'center'
  },
  scoreRoot: {
    border: theme.border,
    gridRowStart: (index: number) => (index + 1) * 2,
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
    gridRowStart: (index: number) => (index + 1) * 2,
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
    gridRowStart: (index: number) => (index + 1) * 2,
    gridColumnStart: 4
  }
}))


function Attribute({ title, score, index }: AttributeProps) {
  const classes = useAttributeStyles(index)

  return (
    <>
      <label className={classes.title}>{title}</label>
      <div className={classes.scoreRoot}>
        <span className={classes.score}>{score}</span>
      </div>
      <div className={classes.modifierRoot}>
        <span className={classes.modifier}>{calculateModifier(score)}</span>
      </div>
      <span className={classes.details}>{ATTRIBUTE_DETAILS[title]}</span>
    </>
  )
}

export default Attribute