import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  itemCreator: {
    
  }
}))

type Props = {

}

function ItemCreator({}: Props) {
  const classes = useStyles()
  return (
    <div className={classes.itemCreator}>
      
    </div>
  )
}

export default ItemCreator