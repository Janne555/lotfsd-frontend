import React, { ReactElement } from 'react'
import { createUseStyles } from 'react-jss'
import NavItem from './NavItem'
import { useNavMenuContext } from './NavBar'

const useStyles = createUseStyles((theme: Theme) => ({
  navList: {
    height: 50,
    backgroundColor: theme.colorDark,
    listStyleType: 'none',
    display: 'flex'
  }
}))

type Props = {
  children: ReactElement<Parameters<typeof NavItem>[0]>[]
}

function NavList({ children }: Props): JSX.Element {
  const classes = useStyles()
  const { onMouseLeave } = useNavMenuContext()

  return (
    <div className={classes.navList} onMouseLeave={onMouseLeave} >
      {children}
    </div>
  )
}

export default NavList