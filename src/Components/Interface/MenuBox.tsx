import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  navItem: {
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: 'green',
    zIndex: 2
  }
}))

type Props = {
}

export default function MenuBox({ }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.navItem}>

    </div>
  )
}
