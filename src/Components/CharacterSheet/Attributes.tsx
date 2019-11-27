import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks/redux'
import { selectAttributes } from '../../Redux/selectors'
import { ATTRIBUTE_DETAILS } from '../../constants'
import { calculateModifier } from '../../services'

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