import React from 'react'
import CharacterSheet from './Components/CharacterSheet/CharacterSheet'
import { createUseStyles } from 'react-jss'
import NavBar from './Components/Interface/NavMenu/NavBar'
import Login from './Components/Interface/Login'
import NavList from './Components/Interface/NavMenu/NavList'
import NavItem from './Components/Interface/NavMenu/NavItem'
import NavContent from './Components/Interface/NavMenu/NavContent'
import { useSelector } from './hooks'
import { selectIsLoggedIn } from './Redux/selectors'

const useStyles = createUseStyles((theme: Theme) => ({
  app: {
    display: 'grid',
    gridTemplateRows: 'auto-fit',
    justifyContent: 'center'
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (!isLoggedIn) {
    return <Login />
  }

  return (
    <div className={classes.app}>
      <NavBar>
        <NavList>
          <NavItem name="Characters">
            hei
          </NavItem>
          <NavItem name="Login" end />
        </NavList>
      </NavBar>
      <CharacterSheet />
    </div>
  );
}

export default App