import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  name: {

  },
  stack: {

  }
}))

type Props = {
  position: number
  item: EquipmentListItem
}

function ListItem({ item: { name, stackSize, amount, itemId }, position }: Props) {
  const classes = useStyles()
  return (
    <tr>
      <td className={classes.name}>{name}</td>
      <td className={classes.stack}>{stackSize > 1 ? `${amount}/${stackSize}` : ''}</td>
      <td>{position + 1}</td>
      <td>        </td>
    </tr>
  )
}

export default ListItem