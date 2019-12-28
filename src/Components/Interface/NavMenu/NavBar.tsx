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
import Drawer from '@material-ui/core/Drawer'

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
      flexDirection: 'column',
      padding: '10px 0 10px 10px'
    }
  },
  mobileNavBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h2': {
      margin: 0
    }
  },
  drawer: {
    backgroundColor: theme.colorDark,
    height: '100%'
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
          <header className={classes.navBar}>
            <div className={classes.mobileNavBar}>
              <h2>{match?.params.path.replace(/^./, str => str.toUpperCase())}</h2>
              <Button onClick={() => setShowMenu(prev => !prev)}><Menu htmlColor="white" /></Button>
            </div>
          </header>
        </HideOnScroll>
        <Drawer anchor="right" open={showMenu} onClose={() => setShowMenu(false)}>
          <div className={classes.drawer} >
            {children}
          </div>
        </Drawer>
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
    <Slide appear direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export {
  useNavMenuContext
}

export default NavBar