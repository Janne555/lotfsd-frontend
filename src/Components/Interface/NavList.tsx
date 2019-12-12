import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import NavItem from './NavItem'

const useStyles = createUseStyles((theme: Theme) => ({
  navList: {
    height: 50,
    backgroundColor: theme.colorDark,
    listStyleType: 'none',
    display: 'flex'
  }
}))

type Props = {
  children: ReactNode
}

export default function NavList({ children }: Props): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.navList}>
      {children}
    </div>
  )
}
