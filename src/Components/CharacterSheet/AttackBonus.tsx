import React from 'react'
import { useSelector } from '../../hooks'
import { createUseStyles } from 'react-jss'
import RotatedCube from '../_shared/RotatedCube'
import { selectBaseAttackBonus, selectMeleeAttackBonus, selectRangedAttackBonus } from '../../Redux/selectors'
import { TITLES } from '../../constants'
import DieFaceRoot from '../_shared/DieFace'

const useStyles = createUseStyles({
  root: {
  },
  attackBonus: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: '40px auto',
    gridRowGap: 20,
    gridColumnGap: 10,
  }
})

export default function AttackBonus() {
  const classes = useStyles()
  const baseAB = useSelector(selectBaseAttackBonus)
  const meleeAB = useSelector(selectMeleeAttackBonus)
  const rangedAB = useSelector(selectRangedAttackBonus)

  return (
    <div className={classes.root}>
      <h3>Attack Bonus</h3>
      <div className={classes.attackBonus}>
        <SingleBonus index={1} value={baseAB} title={TITLES.BASE_AB} />
        <SingleBonus index={2} value={meleeAB} title={TITLES.MELEE_AB} />
        <SingleBonus index={3} value={rangedAB} title={TITLES.RANGED_AB} />
      </div>
      <DieFaceRoot value={3} />
    </div>
  )
}

const useSubStyles = createUseStyles({
  singleBonus: {
    gridColumnStart: (index: number) => index,
    justifySelf: 'center',
    gridRowStart: 1
  },
  title: {
    gridColumnStart: (index: number) => index,
    justifySelf: 'center',
    gridRowStart: 2
  }
})

function SingleBonus({ index, value, title }: { index: number, value: number, title: string }) {
  const classes = useSubStyles(index)

  return (
    <>
      <div className={classes.singleBonus}>
        <RotatedCube>
          {value}
        </RotatedCube>
      </div>
      <h4 className={classes.title}>{title}</h4>
    </>
  )
}