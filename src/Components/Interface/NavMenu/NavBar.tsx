import React, { useState, ReactElement, useContext, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import NavContent from './NavContent'
import NavItem from './NavItem'

const navMenuContext = React.createContext({
  onSetVisible(name: string) {
    return
  },
  onHide(e: React.SyntheticEvent) {
    return
  }
})

function useNavMenuContext() {
  return useContext(navMenuContext)
}

const useStyles = createUseStyles((theme: Theme) => ({
  navBar: {
    backgroundColor: theme.colorDark,
    position: 'relative',
    display: 'flex'
  },
  '@media (max-width: 1100px)': {
    navBar: {
      height: 50
    }
  }
}))

type Props = {
  children: ReactElement<Parameters<typeof NavItem>[0]>[]
}

function NavBar({ children }: Props) {
  const classes = useStyles()
  const [visible, setVisible] = useState<string>()

  function handleFocusOrHover(name: string) {
    if (visible !== name) {
      setVisible(name)
    }
  }

  function handleMouseLeaveOrBlur() {
    if (visible)
      setVisible(undefined)
  }

  let navContent: { [name: string]: ReactNode } = {}

  React.Children.forEach(children, child => (
    navContent[child.props.name] = child.props.children
  ))

  return (
    <navMenuContext.Provider value={{ onSetVisible: handleFocusOrHover, onHide: handleMouseLeaveOrBlur }}>
      <header className={classes.navBar} onMouseLeave={handleMouseLeaveOrBlur} onBlur={handleMouseLeaveOrBlur}>
        {children}
        {visible &&
          <NavContent>
            {navContent[visible]}
          </NavContent>
        }
      </header>
    </navMenuContext.Provider>
  )
}

export {
  useNavMenuContext
}

export default NavBar