import React from 'react'
import RotatedCube from '../_shared/RotatedCube'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  encumbrance: {
    display: 'grid',
    gridTemplateColumns: '25% 25% 50%',
    gridTemplateRows: 'repeat(20%, 5)',
    border: theme.border,
    padding: theme.padding,
    '& h2': {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      justifySelf: 'center'
    },
    '& h4': {
      gridColumnStart: 1
    },
    backgroundColor: theme.componentBackgroundColor
  },
  total: {
    gridColumnStart: 3,
    gridRowStart: 1,
    gridRowEnd: 6,
    display: 'grid',
    gridRowGap: 15,
    justifySelf: 'center',
    alignSelf: 'center',
    justifyItems: 'center'
  }
}))

export default function Encumbrance() {
  const classes = useStyles()

  throw Error("TODO")

  // return (
  //   <div className={classes.encumbrance}>
  //     <h2>Encumbrance</h2>
  //     <div className={classes.total}>
  //       <h3>Total</h3>
  //       <RotatedCube>
  //         {encumbrance}
  //       </RotatedCube>
  //       <h4>{description}</h4>
  //     </div>
  //     <h4>Explore</h4>
  //     <span>{explorationDistance} feet</span>
  //     <h4>Combat</h4>
  //     <span>{combatDistance} feet</span>
  //     <h4>Running</h4>
  //     <span>{explorationDistance} feet</span>
  //     <h4>Per Day</h4>
  //     <span>{dayDistance} miles</span>
  //   </div>
  // )
}
