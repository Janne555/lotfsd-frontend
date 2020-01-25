import React from 'react'
import { createUseStyles } from 'react-jss'
import RotatedCube from '../_shared/RotatedCube'
import { TITLES, CHARACTER_SHEET_UPDATE_MUTATION } from '../../constants'
import Input from '../_shared/Input'
import { Validator, updateCharacterSheet } from '../../services'
import { CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables } from '../../constants/mutations/__generated__/CharacterSheetUpdateMutation'
import { useMutation } from '@apollo/react-hooks'

const useStyles = createUseStyles((theme: Theme) => ({
  attackBonus: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 75px)',
    gridTemplateRows: 'auto 40px auto',
    gridRowGap: 20
  },
  title: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
    justifySelf: 'center'
  }
}))


type Props = {
  baseAB: number
  meleeAB: number
  rangedAB: number
  characterId?: string
}

function AttackBonus({ baseAB, meleeAB, rangedAB, characterId }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.attackBonus}>
      <h2 className={classes.title}>Attack Bonus</h2>
      <SingleBonus index={1} value={baseAB} title={TITLES.BASE_AB} base characterId={characterId} />
      <SingleBonus index={2} value={meleeAB} title={TITLES.MELEE_AB} />
      <SingleBonus index={3} value={rangedAB} title={TITLES.RANGED_AB} />
    </div>
  )
}

const useSubStyles = createUseStyles({
  singleBonus: {
    gridColumnStart: (index: number) => index,
    justifySelf: 'center',
    gridRowStart: 2
  },
  title: {
    gridColumnStart: (index: number) => index,
    justifySelf: 'center',
    gridRowStart: 3
  }
})

const validator = new Validator().isLengthy.isNumber

type SubProps = {
  index: number
  value: number
  title: string
  base?: boolean
  characterId?: string
}

function SingleBonus({ index, value, title, base, characterId }: SubProps) {
  const classes = useSubStyles(index)
  const [mutate, { data, loading, error }] = useMutation<CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables>(CHARACTER_SHEET_UPDATE_MUTATION, {
    update: updateCharacterSheet(characterId),
  })

  function handleBlur(valueStr: string) {
    if (characterId && Number(valueStr) !== value) {
      mutate({
        variables: {
          ch: { attackBonus: Number(valueStr) },
          id: characterId
        }
      })
    }
  }

  return (
    <>
      <div className={classes.singleBonus}>
        <RotatedCube>
          {base
            ? <Input disabled={loading} validate={validator.validate} onBlur={handleBlur} value={`${value}`} />
            : value
          }
        </RotatedCube>
      </div>
      <h4 className={classes.title}>{title}</h4>
    </>
  )
}

export default AttackBonus