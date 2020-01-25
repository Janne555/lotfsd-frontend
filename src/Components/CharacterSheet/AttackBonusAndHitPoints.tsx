import React from 'react'
import { createUseStyles } from 'react-jss'
import AttackBonus from './AttackBonus'
import DieFace from '../_shared/DieFace'
import Cube from '../_shared/Cube'
import { updateCharacterSheet } from '../../services'
import { CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables } from '../../constants/mutations/__generated__/CharacterSheetUpdateMutation'
import { CHARACTER_SHEET_UPDATE_MUTATION } from '../../constants'
import { useMutation } from '@apollo/react-hooks'
import { useCharacterSheetUpdate } from '../../hooks'

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

  return (
    <div className={classes.attackBonusAndHitPointsRoot}>
      <AttackBonus baseAB={baseAB} meleeAB={meleeAB} rangedAB={rangedAB} characterId={characterId} />
      <div className={classes.surpriseChance}>
        <h3>Surprise Chance</h3>
        <div className={classes.surpriseValue}>
          <DieFace disabled={loading} value={surpriseChance} onValueChange={handleSurpriseChange} />
        </div>
      </div>
      <div className={classes.hitpoints}>
        <h4>Max HP</h4>
        <Cube>{maxHp}</Cube>
        <Cube>{currentHp}</Cube>
        <h4>Current HP</h4>
      </div>
    </div>
  )
}

export default AttackBonusAndHitPoints