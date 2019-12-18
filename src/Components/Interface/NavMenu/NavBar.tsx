import React, { useState, ReactElement, useContext, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import NavList from './NavList'
import NavContent from './NavContent'

const navMenuContext = React.createContext({
  onMouseEnter(name: string) {
    return
  },
  onMouseLeave() {
    return
  },

})

function useNavMenuContext() {
  return useContext(navMenuContext)
}

const useStyles = createUseStyles((theme: Theme) => ({
  navBar: {
    height: 50,
    backgroundColor: theme.colorDark,
    position: 'relative'
  }
}))


type Props = {
  children: ReactElement<Parameters<typeof NavList>[0]>
}


function NavBar({ children }: Props) {
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

  let navContent: { [name: string]: ReactNode } = {}

  React.Children.forEach(children, child => (
    child.props.children.forEach(subchild => (
      navContent[subchild.props.name] = subchild.props.children
    ))
  ))

  return (
    <navMenuContext.Provider value={{ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }}>
      <div className={classes.navBar}>
        {children}
        {visible &&
          <NavContent>
            {navContent[visible]}
          </NavContent>
        }
      </div>
    </navMenuContext.Provider>
  )
}

export {
  useNavMenuContext
}

export default NavBar