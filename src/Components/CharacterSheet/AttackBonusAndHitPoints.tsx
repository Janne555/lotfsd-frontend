import React from 'react'
import { createUseStyles } from 'react-jss'
import AttackBonus from './AttackBonus'
import { useSelector, useCharacterContext } from '../../hooks'
import { selecCurrentHp, selectMaxHp, selectSurpriseChance } from '../../Redux/selectors'
import DieFace from '../_shared/DieFace'
import Cube from '../_shared/Cube'

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

function AttackBonusAndHitPoints() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const currentHP = useSelector(selecCurrentHp(characterId))
  const maxHP = useSelector(selectMaxHp(characterId))
  const supriseChance = useSelector(selectSurpriseChance(characterId))

  return (
    <div className={classes.attackBonusAndHitPointsRoot}>
      <AttackBonus />
      <div className={classes.surpriseChance}>
        <h3>Surprise Chance</h3>
        <div className={classes.surpriseValue}>
          <DieFace value={supriseChance} />
        </div>
      </div>
      <div className={classes.hitpoints}>
        <h4>Max HP</h4>
        <Cube>{maxHP}</Cube>
        <Cube>{currentHP}</Cube>
        <h4>Current HP</h4>
      </div>
    </div>
  )
}

export default AttackBonusAndHitPoints