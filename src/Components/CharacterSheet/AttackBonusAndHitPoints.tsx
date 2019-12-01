import React from 'react'
import { createUseStyles } from 'react-jss'
import AttackBonus from './AttackBonus'
import { useSelector } from '../../hooks'
import { selecCurrentHP, selectMaxHP, selectSurpriseChance } from '../../Redux/selectors'
import DieFace from '../_shared/DieFace'

const useStyles = createUseStyles((theme: Theme) => ({
  attackBonusAndHitPointsRoot: {
    display: 'flex',
    border: theme.border,
    padding: theme.padding,
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  surpriseChance: {
    display: 'grid',
    flexDirection: 'column',
    '& h3': {
      alignSelf: 'end'
    }
  },
  surpriseValue: {
    justifySelf: 'center'
  }
}))

function AttackBonusAndHitPoints() {
  const classes = useStyles()
  const currentHP = useSelector(selecCurrentHP)
  const maxHP = useSelector(selectMaxHP)
  const supriseChance = useSelector(selectSurpriseChance)

  return (
    <div className={classes.attackBonusAndHitPointsRoot}>
      <AttackBonus />
      <div className={classes.surpriseChance}>
        <h3>Surprise Chance</h3>
        <div className={classes.surpriseValue}>
          <DieFace value={supriseChance} />
        </div>
      </div>
    </div>
  )
}

export default AttackBonusAndHitPoints