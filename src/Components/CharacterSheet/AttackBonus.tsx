import React from 'react'
import { useSelector, useCharacterContext, useDispatch } from '../../hooks'
import { createUseStyles } from 'react-jss'
import RotatedCube from '../_shared/RotatedCube'
import { selectBaseAttackBonus, selectMeleeAttackBonus, selectRangedAttackBonus } from '../../Redux/selectors'
import { TITLES } from '../../constants'
import Input from '../_shared/Input'
import { Validator } from '../../services'
import { setAttackBonus } from '../../Redux/actions'

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

function AttackBonus() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const baseAB = useSelector(selectBaseAttackBonus(characterId))
  const meleeAB = useSelector(selectMeleeAttackBonus(characterId))
  const rangedAB = useSelector(selectRangedAttackBonus(characterId))

  return (
    <div className={classes.attackBonus}>
      <h2 className={classes.title}>Attack Bonus</h2>
      <SingleBonus index={1} value={baseAB} title={TITLES.BASE_AB} base />
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
}

function SingleBonus({ index, value, title, base }: SubProps) {
  const classes = useSubStyles(index)
  const dispatch = useDispatch()
  const { characterId } = useCharacterContext()

  function handleChange(value: string) {
    dispatch(setAttackBonus({ value: Number(value), characterId }))
  }


  return (
    <>
      <div className={classes.singleBonus}>
        <RotatedCube>
          {base
            ? <Input isValid={validator.validate} onChange={handleChange} value={`${value}`} />
            : value
          }
        </RotatedCube>
      </div>
      <h4 className={classes.title}>{title}</h4>
    </>
  )
}

export default AttackBonus