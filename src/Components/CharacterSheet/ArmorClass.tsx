import React from 'react'
import { createUseStyles } from 'react-jss'
import Cube from '../_shared/Cube'
import Triangle from '../_shared/Triangle'
import { useSelector } from '../../hooks'
import { selectBaseArmorClass, selectRangedArmorClass, selectWithoutShieldArmorClass, selectSurprisedArmorClass } from '../../Redux/selectors'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    border: theme.border,
    padding: theme.padding,
    '& h2': {
      textAlign: 'center'
    },
    backgroundColor: theme.componentBackgroundColor
  },
  armorClass: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridColumnGap: 10,
    gridRowGap: 10,
    justifyItems: 'center',
    textAlign: 'center',
    '& h4:nth-of-type(1)': {
      gridRowStart: 2
    },
    '& h4:nth-of-type(3)': {
      gridRowStart: 4
    }
  }
}))


function ArmorClass() {
  const classes = useStyles()
  const baseAC = useSelector(selectBaseArmorClass)
  const rangedAC = useSelector(selectRangedArmorClass)
  const withoutShieldAC = useSelector(selectWithoutShieldArmorClass)
  const surprisedAC = useSelector(selectSurprisedArmorClass)

  return (
    <div className={classes.root}>
      <h2>Armor Class</h2>
      <div className={classes.armorClass}>
        <Cube>{baseAC}</Cube>
        <h4>Mêlée</h4>
        <Cube>{rangedAC}</Cube>
        <h4>Ranged</h4>
        <Triangle>{withoutShieldAC}</Triangle>
        <h4>Without<br />Shield</h4>
        <Triangle>{surprisedAC}</Triangle>
        <h4>Surprised</h4>
      </div>
    </div>
  )
}

export default ArmorClass