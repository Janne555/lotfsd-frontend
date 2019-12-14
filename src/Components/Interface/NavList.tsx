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

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: ReactNode
}

export default function NavList({ children, ...divProps }: Props): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.navList} {...divProps} >
      {children}
    </div>
  )
}
