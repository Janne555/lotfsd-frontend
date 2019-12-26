import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  itemIndex: {

  }
}))

type Props = {

}

function ItemIndex({ }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.itemIndex}>
      
    </div>
  )
}

export default ItemIndex