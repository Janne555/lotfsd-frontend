import React, { useState, ReactElement, useContext, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import NavContent from './NavContent'
import NavItem from './NavItem'
import { useScreenResizeEvent } from '../../../hooks'
import Button from '@material-ui/core/Button'
import { useRouteMatch } from 'react-router-dom'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Menu from '@material-ui/icons/Menu'

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
    display: 'flex',
    color: 'white'
  },
  '@media (max-width: 1100px)': {
    navBar: {
      flexDirection: 'column'
    }
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}))

type Props = {
  children: ReactElement<Parameters<typeof NavItem>[0]>[]
}

function NavBar({ children }: Props) {
  const classes = useStyles()
  const [visible, setVisible] = useState<string>()
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = useScreenResizeEvent(width => width < 1100)
  const match = useRouteMatch<{ path: string }>('/:path')

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

  if (isMobile) {
    return (
      <navMenuContext.Provider value={{ onSetVisible: handleFocusOrHover, onHide: handleMouseLeaveOrBlur }}>
        <HideOnScroll>
          <header className={classes.navBar} onBlur={() => setShowMenu(false)}>
            <div>
              <span>{match?.params.path}</span>
              <Button onClick={() => setShowMenu(prev => !prev)}><Menu htmlColor="white" /></Button>
            </div>
            {showMenu &&
              <div className={classes.mobileMenu}>
                {children}
              </div>
            }
          </header>
        </HideOnScroll>
      </navMenuContext.Provider>
    )
  }

  return (
    <navMenuContext.Provider value={{ onSetVisible: handleFocusOrHover, onHide: handleMouseLeaveOrBlur }}>
      <header className={classes.navBar} onMouseLeave={handleMouseLeaveOrBlur} onBlur={handleMouseLeaveOrBlur}>
        {children}
        {visible && navContent[visible] &&
          <NavContent>
            {navContent[visible]}
          </NavContent>
        }
      </header>
    </navMenuContext.Provider>
  )
}

type HideProps = {
  children: ReactNode
}

function HideOnScroll({ children }: HideProps) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export {
  useNavMenuContext
}

export default NavBar