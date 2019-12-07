import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  name: {
    gridColumnStart: 1
  },
  reserved: {
    gridColumnStart: 1,
    textAlign: 'center',
    backgroundColor: theme.grey,
    width: '100%',
    height: '100%'
  },
  stack: {
    gridColumnStart: 2,
    justifySelf: 'end',
  },
  position: {
    gridColumnStart: 3,
    justifySelf: 'end'
  }
}))

type Props = {
  position: number
  label?: string
  item?: EquipmentListItem
}

function EquipmentListItem({ item, position, label }: Props) {
  const classes = useStyles()


  if (item) {
    const { name, stackSize, amount, itemId } = item
    return (
      <>
        <div className={classes.name}>{name}</div>
        <div className={classes.stack}>{stackSize > 1 ? `${amount}/${stackSize}` : ''}</div>
        <div className={classes.position}>{position + 1}</div>
      </>
    )
  } else {
    return (
      <>
        {label
          ? <div className={classes.name}>{label}</div>
          : <div className={classes.reserved}>reserved</div>
        }
      </>
    )
  }
}

export default EquipmentListItem