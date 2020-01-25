import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS, SAVING_THROW_TITLES, CHARACTER_SHEET_UPDATE_MUTATION } from '../../constants'
import RotatedCube from '../_shared/RotatedCube'
import Input from '../_shared/Input'
import { Validator, updateCharacterSheet } from '../../services'
import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables } from '../../constants/mutations/__generated__/CharacterSheetUpdateMutation'

type Props = {
  name: keyof SavingThrows,
  values: {
    base: number
    modified: number
  }
  characterId?: string
}

const useStyles = createUseStyles({
  savingThrowRoot: {
    display: 'grid',
    gridTemplateRows: '20px 40px auto',
    gridRowGap: 15,
    textAlign: 'center',
    maxWidth: 100,
    '& span': {
      alignSelf: 'center'
    }
  }
})

const validator = new Validator().isLengthy.isNumber

export default function SavingThrow({ name, values: { base, modified }, characterId }: Props) {
  const classes = useStyles()
  const [inFocus, setInFocus] = useState(false)
  const [mutate, { data, loading, error }] = useMutation<CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables>(CHARACTER_SHEET_UPDATE_MUTATION, {
    update: updateCharacterSheet(characterId),
    onCompleted: () => setInFocus(false)
  })

  function handleFocus() {
    setInFocus(true)
  }

  function handleBlur(value: string, isValid: boolean) {
    if (characterId && Number(value) !== base && isValid) {
      mutate({
        variables: {
          ch: { [name]: Number(value) },
          id: characterId
        }
      })
    } else {
      setInFocus(false)
    }
  }

  return (
    <div className={classes.savingThrowRoot}>
      <h3>{SAVING_THROW_TITLES[name]}</h3>
      <RotatedCube>
        <Input
          validate={validator.validate}
          value={`${inFocus ? base : modified}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={loading}
        />
      </RotatedCube>
      <span>{SAVING_THROW_DETAILS[name]}</span>
    </div>
  )
}
