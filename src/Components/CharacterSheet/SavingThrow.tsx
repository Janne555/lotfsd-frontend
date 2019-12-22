import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS, SAVING_THROW_TITLES } from '../../constants'
import RotatedCube from '../_shared/RotatedCube'
import Input from '../_shared/Input'
import { useDispatch, useCharacterContext } from '../../hooks'
import { Validator } from '../../services'
import { setSavingThrow } from '../../Redux/reducers/characterSheet/savingThrows'

type Props = {
  name: keyof SavingThrows,
  value: [number, number]
}

const useStyles = createUseStyles({
  savingThrowRoot: {
    display: 'grid',
    gridTemplateRows: '20px 40px auto',
    gridRowGap: 15,
    textAlign: 'center',
    maxWidth: 100,
    maxHeight: 150,
    '& span': {
      alignSelf: 'center'
    }
  }
})

const validator = new Validator().isLengthy.isNumber

export default function SavingThrow({ name, value: [base, modified] }: Props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [inFocus, setInFocus] = useState(false)
  const { characterId } = useCharacterContext()

  function handleChange(value: string) {
    dispatch(setSavingThrow({ savingThrow: name, value: Number(value), id: characterId }))
  }

  function handleFocus() {
    setInFocus(true)
  }

  function handleBlur() {
    setInFocus(false)
  }

  return (
    <div className={classes.savingThrowRoot}>
      <h3>{SAVING_THROW_TITLES[name]}</h3>
      <RotatedCube>
        <Input
          isValid={validator.validate}
          onChange={handleChange}
          value={`${inFocus ? base : modified}`}
          inputProps={{
            onFocus: handleFocus,
            onBlur: handleBlur
          }}
        />
      </RotatedCube>
      <span>{SAVING_THROW_DETAILS[name]}</span>
    </div>
  )
}
