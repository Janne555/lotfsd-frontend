import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  name: {
    gridColumnStart: 1,
    width: '100%',
    height: '100%'
  },
  reserved: {
    gridColumnStart: 1,
    textAlign: 'center',
    backgroundColor: theme.grey,
    width: '100%',
    height: '100%',
  },
  stack: {
    gridColumnStart: 2,
    justifySelf: 'end',
    width: '100%',
    height: '100%'
  },
  position: {
    gridColumnStart: 3,
    justifySelf: 'end',
    width: '100%',
    height: '100%'
  }
}))

type Props = {
  position: number
  label?: string
  item?: EquipmentListItem
  padding?: boolean
}

function EquipmentListItem({ item, position, label, padding }: Props) {
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
        {padding
          ? <div className={classes.reserved}>reserved for <i>{label}</i></div>
          : <div className={classes.name}>{label}</div>
        }
      </>
    )
  }
}

export default EquipmentListItem