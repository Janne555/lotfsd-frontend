import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import NavList from './NavList'
import NavItem from './NavItem'
import MenuBox from './MenuBox'

const useStyles = createUseStyles((theme: Theme) => ({
  navBar: {
    height: 50,
    backgroundColor: theme.colorDark,
    position: 'relative'
  }
}))

type Props = {
}


export default function NavBar({ }: Props) {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)

  function handleMouseEnter(name: string) {
    if (!visible) {
      setVisible(true)
    }
  }

  function handleMouseLeave(name: string) {
    if (visible)
      setVisible(false)
  }


  return (
    <div className={classes.navBar}>
      <NavList>
        <NavItem name="foo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <NavItem name="bar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </NavList>
      {visible && <MenuBox />}
    </div>
  )
}
