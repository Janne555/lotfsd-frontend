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

  function handleMouseLeave() {
    if (visible)
      setVisible(false)
  }


  return (
    <div className={classes.navBar}>
      <NavList onMouseLeave={handleMouseLeave}>
        <NavItem name="foo" onMouseEnter={handleMouseEnter} />
        <NavItem name="bar" onMouseEnter={handleMouseEnter} />
      </NavList>
      {visible && <MenuBox />}
    </div>
  )
}
