import React from 'react'
import { createUseStyles } from 'react-jss'
import AttackBonus from './AttackBonus'
import DieFace from '../_shared/DieFace'
import Cube from '../_shared/Cube'
import { Validator } from '../../services'
import { useCharacterSheetUpdate } from '../../hooks'
import Input from '../_shared/Input'

const useStyles = createUseStyles((theme: Theme) => ({
  attackBonusAndHitPointsRoot: {
    display: 'flex',
    border: theme.border,
    padding: theme.padding,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.componentBackgroundColor
  },
  surpriseChance: {
    marginTop: 10,
    display: 'grid',
    flexDirection: 'column',
    '& h3': {
      alignSelf: 'end'
    }
  },
  surpriseValue: {
    justifySelf: 'center',
  },
  hitpoints: {
    marginTop: 10,
    display: 'grid',
    gridRowGap: 10,
    justifyItems: 'center'
  }
}))

type Props = {
  baseAB: number
  meleeAB: number
  rangedAB: number
  maxHp: number
  currentHp: number
  surpriseChance: number
  characterId?: string
}

const validator = new Validator().isLengthy.isNumber

function AttackBonusAndHitPoints({ baseAB, currentHp, maxHp, meleeAB, rangedAB, surpriseChance, characterId }: Props) {
  const classes = useStyles()
  const [mutate, { data, loading, error }] = useCharacterSheetUpdate(characterId)

  function handleSurpriseChange(value: number) {
    if (characterId && value !== surpriseChance) {
      mutate({
        variables: {
          ch: { surpriseChance: value },
          id: characterId
        }
      })
    }
  }

  function handleMaxHpBlur(value: string, isValid: boolean) {
    if (characterId && Number(value) !== maxHp && isValid) {
      mutate({
        variables: {
          ch: { maxHp: Number(value) },
          id: characterId
        }
      })
    }
  }

  function handleCurrentHpBlur(value: string, isValid: boolean) {
    if (characterId && Number(value) !== maxHp && isValid) {
      mutate({
        variables: {
          ch: { currentHp: Number(value) },
          id: characterId
        }
      })
    }
  }

  return (
    <div className={classes.attackBonusAndHitPointsRoot}>
      <AttackBonus baseAB={baseAB} meleeAB={meleeAB} rangedAB={rangedAB} characterId={characterId} />
      <div className={classes.surpriseChance}>
        <h3>Surprise Chance</h3>
        <div className={classes.surpriseValue}>
          <DieFace loading={loading} value={surpriseChance} onValueChange={handleSurpriseChange} />
        </div>
      </div>
      <div className={classes.hitpoints}>
        <h4>Max HP</h4>
        <Cube>
          <Input
            validate={validator.validate}
            value={`${maxHp}`}
            type="number"
            disabled={loading}
            onBlur={handleMaxHpBlur}
          />
        </Cube>
        <Cube>
          <Input
            validate={validator.validate}
            value={`${currentHp}`}
            type="number"
            disabled={loading}
            onBlur={handleCurrentHpBlur}
          />
        </Cube>
        <h4>Current HP</h4>
      </div>
    </div>
  )
}

export default AttackBonusAndHitPoints