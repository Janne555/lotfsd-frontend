import React from 'react'
import { createUseStyles } from 'react-jss'
import Attribute from './Attribute'
import { hasKey } from '../../services'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '40px 40px 40px auto',
    gridTemplateRows: '30px auto',
    gridColumnGap: 10,
    border: theme.border,
    padding: theme.padding,
    justifyContent: 'center',
    backgroundColor: theme.componentBackgroundColor
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
    fontSize: '1.5em',
    marginBottom: 5
  }
}))

type Props = {
  attributes: Attributes
  modifiers?: AttributeModifiers
  onChange?: (key: keyof Attributes, value: string) => void
}

function Attributes({ attributes, modifiers, onChange }: Props) {
  const classes = useStyles(Object.keys(attributes).length)

  return (
    <div className={classes.root}>
      <span className={classes.leftTitle}>Ability Scores</span>
      <span className={classes.topTitle}>Modifiers</span>
      {
        Object.entries(attributes).map(([name, value], index) => (
          hasKey(attributes, name) && <Attribute key={name} title={name} score={value} index={index} modifier={modifiers?.[name]} onChange={onChange} />
        ))
      }
    </div>
  )
}

export default Attributes