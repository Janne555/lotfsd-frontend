import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  navItem: {
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: theme.colorPurpleMid,
    zIndex: 2,
    top: '100%'
  }
}))

type Props = {
  children: ReactNode
}

function NavContent({ children }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.navItem}>
      {children}
    </div>
  )
}

export default NavContent