import React from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  value: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  dieFaceRoot: {

  }
}))

export default function DieFace() {
  const classes = useStyles()

  return (
    <div className={classes.dieFaceRoot}>

    </div>
  )
}
