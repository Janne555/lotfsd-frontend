import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  addRetainer: {

  }
}))

type Props = {
  onClose: () => void
}

function AddRetainer({ onClose }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.addRetainer}>
    </div>
  )
}

export default AddRetainer