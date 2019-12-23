import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  listItem: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 33%)'
  },
  name: {
    width: '100%',
    height: '100%'
  },
  stack: {
    justifySelf: 'end',
    width: '100%',
    height: '100%'
  },
  position: {
    justifySelf: 'end',
    width: '100%',
    height: '100%'
  }
}))

type Props = {
  position?: number
  item?: EquipmentListItem
}

function EquipmentListItem({ item, position }: Props) {
  const classes = useStyles(!item)

  const { name = "Name", stackSize = "Stack Size", amount } = item ?? {}

  function stackText() {
    if (typeof stackSize === 'number') {
      return stackSize > 1 ? `${amount}/${stackSize}` : ''
    } else {
      return stackSize
    }
  }

  return (
    <li className={classes.listItem}>
      <div className={classes.name}>{name}</div>
      <div className={classes.stack}>{stackText()}</div>
      <div className={classes.position}>{position != null ? position : "Position"}</div>
    </li>
  )
}

export default EquipmentListItem