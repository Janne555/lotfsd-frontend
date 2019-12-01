import React from 'react'
import { createUseStyles } from 'react-jss'
import Cube from '../_shared/Cube'
import Triangle from '../_shared/Triangle'

const useStyles = createUseStyles((theme: Theme) => ({
  armorClassRoot: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridColumnGap: 10,
    gridRowGap: 10,
    justifyItems: 'center',
    border: theme.border,
    padding: theme.padding,
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

  return (
    <div className={classes.armorClassRoot}>
      <Cube>1</Cube>
      <h4>Mêlée</h4>
      <Cube>1</Cube>
      <h4>Ranged</h4>
      <Triangle>2</Triangle>
      <h4>Without<br />Shield</h4>
      <Triangle>2</Triangle>
      <h4>Surprised</h4>
    </div>
  )
}

export default ArmorClass