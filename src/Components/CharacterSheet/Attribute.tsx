
import React from 'react'
import { createUseStyles } from 'react-jss'
import { ATTRIBUTE_DETAILS, ATTRIBUTE_TITLES, CHARACTER_SHEET_UPDATE_MUTATION } from '../../constants'
import Input from '../_shared/Input'
import { Validator, calculateModifier, updateCharacterSheet } from '../../services'
import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables } from '../../constants/mutations/__generated__/CharacterSheetUpdateMutation'

const useAttributeStyles = createUseStyles((theme: Theme) => ({
  title: {
    gridColumnStart: 2,
    gridRowStart: (index: number) => (index + 1) * 2 - 1,
    justifySelf: 'center',
    alignSelf: 'end'
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

type AttributeProps = {
  title: keyof Attributes
  score: number
  index: number
  modifier?: number
  onChange?: (key: keyof Attributes, value: string) => void
  characterId?: string
}

const validator = new Validator().isLengthy.isNumber

function Attribute({ title, score, index, modifier, onChange, characterId }: AttributeProps) {
  const classes = useAttributeStyles(index)
  const [mutate, { data, loading, error }] = useMutation<CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables>(CHARACTER_SHEET_UPDATE_MUTATION, {
    update: updateCharacterSheet(characterId)
  })

  function handleBlur(value: string, isValid: boolean) {
    if (characterId && score !== Number(value) && isValid) {
      mutate({
        variables: {
          ch: { [title]: Number(value) },
          id: characterId
        }
      })
    }
  }

  return (
    <>
      <label htmlFor={title} className={classes.title}>{ATTRIBUTE_TITLES[title]}</label>
      <div className={classes.scoreRoot}>
        <Input
          validate={validator.validate}
          onChange={value => onChange?.(title, value)}
          value={`${score}`}
          id={title}
          type="number"
          disabled={loading}
          onBlur={handleBlur}
        />
      </div>
      <div className={classes.modifierRoot}>
        <span className={classes.modifier}>{modifier != null ? modifier : calculateModifier(score)}</span>
      </div>
      <span className={classes.details}>{ATTRIBUTE_DETAILS[title]}</span>
    </>
  )
}

export default Attribute