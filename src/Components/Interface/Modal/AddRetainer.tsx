import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  addRetainer: {
    
  }
}))

type Props = {

}

function AddRetainer({}: Props) {
  const classes = useStyles()
  return (
    <div className={classes.addRetainer}>
    </div>
  )
}

export default AddRetainer