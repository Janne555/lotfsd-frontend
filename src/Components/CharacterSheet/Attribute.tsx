
import React from 'react'
import { createUseStyles } from 'react-jss'
import { ATTRIBUTE_DETAILS, ATTRIBUTE_TITLES } from '../../constants'
import { useDispatch, useSelector, useCharacterContext } from '../../hooks'
import { setAttribute } from '../../Redux/reducers/characterSheet/attributes'
import Input from '../_shared/Input'
import { Validator } from '../../services'
import { selectCharacterId } from '../../Redux/selectors'

type AttributeProps = {
  title: keyof Attributes
  score: number
  index: number
  modifier: number
}

type StyleProps = {
  index: number
}

const useAttributeStyles = createUseStyles((theme: Theme) => ({
  title: {
    gridColumnStart: 2,
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2 - 1,
    justifySelf: 'center',
    alignSelf: 'end'
  },
  scoreRoot: {
    border: theme.border,
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2,
    gridColumnStart: 2,
    justifySelf: 'center',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  modifierRoot: {
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2,
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
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2,
    gridColumnStart: 4
  }
}))

const validator = new Validator().isLengthy.isNumber

function Attribute({ title, score, index, modifier }: AttributeProps) {
  const classes = useAttributeStyles({ index })
  const dispatch = useDispatch()
  const { characterId } = useCharacterContext()

  return (
    <>
      <label htmlFor={`attribute-${title}`} className={classes.title}>{ATTRIBUTE_TITLES[title]}</label>
      <div className={classes.scoreRoot}>
        <Input
          isValid={validator.validate}
          onChange={value => dispatch(setAttribute({ attributeName: title, value: Number(value), id: characterId }))}
          value={`${score}`}
          inputProps={{ id: `attribute-${title}` }}
        />
      </div>
      <div className={classes.modifierRoot}>
        <span className={classes.modifier}>{modifier}</span>
      </div>
      <span className={classes.details}>{ATTRIBUTE_DETAILS[title]}</span>
    </>
  )
}

export default Attribute