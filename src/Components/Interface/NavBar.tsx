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
  const [visible, setVisible] = useState<string>()

  function handleMouseEnter(name: string) {
    if (!visible) {
      setVisible(name)
    }
  }

  function handleMouseLeave() {
    if (visible)
      setVisible(undefined)
  }


  return (
    <div className={classes.navBar}>
      <NavList onMouseLeave={handleMouseLeave}>
        <NavItem name="Characters" onMouseEnter={handleMouseEnter} />
        <NavItem name="Login" end />
        {visible &&
          <MenuBox>
            
          </MenuBox>
        }
      </NavList>
    </div>
  )
}
