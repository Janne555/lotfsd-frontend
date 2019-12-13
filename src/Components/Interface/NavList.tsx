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
  onMouseLeave: () => void
}

export default function NavList({ children, onMouseLeave }: Props): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.navList} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}
