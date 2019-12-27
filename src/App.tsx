import React from 'react'
import CharacterSheet from './Components/CharacterSheet/CharacterSheet'
import { createUseStyles } from 'react-jss'
import NavBar from './Components/Interface/NavMenu/NavBar'
import Login from './Components/Interface/Login'
import NavItem from './Components/Interface/NavMenu/NavItem'
import { useSelector, useScreenResizeEvent } from './hooks'
import { selectIsLoggedIn, selectCharacterId } from './Redux/selectors'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import CharacterList from './Components/Interface/CharacterList/CharacterList'
import CharacterCreator from './Components/CharacterCreator/CharacterCreator'
import AppModal from './Components/Interface/Modal/AppModal'
import ItemIndex from './Components/ItemIndex/ItemIndex'
import ItemCreator from './Components/ItemIndex/ItemCreator'
import NoContent from './Components/_shared/NoContent'

const useStyles = createUseStyles((theme: Theme) => ({
  app: {
    display: 'grid',
    gridTemplateColumns: 'auto 1100px auto',
    gridTemplateRows: '3rem auto 5rem',
    justifyContent: 'center',
    '& > *': {
      gridColumnStart: 2
    }
  },
  footer: {
    backgroundColor: 'pink'
  },
  body: {
    minHeight: 'calc(100vh - 8rem)',
    backgroundColor: theme.colorGreyLightest,
  },
  '@media (max-width: 1100px)': {
    app: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const characterNameMatch = useRouteMatch<{ character: string }>('/characters/:character')
  const actionMatch = useRouteMatch<{ action: string }>('/characters/:character/:action')
  const characterId = useSelector(selectCharacterId(characterNameMatch?.params.character))
  const isMobile = useScreenResizeEvent(width => width < 1100)

  console.log(characterNameMatch)
  if (!isLoggedIn) {
    return <Login />
  }

  return (
    <div className={classes.app}>
      <NavBar>
        <NavItem name="Characters" to="/characters">
          <CharacterList />
        </NavItem>
        <NavItem name="Campaigns" to="/campaigns">
          moi
          </NavItem>
        <NavItem name="Item Index" to="/itemindex" />
        <NavItem name="Login" end />
      </NavBar>
      <div className={classes.body}>
        <Switch>
          <Route path="/characters">
            {characterId && characterNameMatch?.params.character
              ? < CharacterSheet characterId={characterId} characterName={characterNameMatch?.params.character} />
              : <CharacterList fullScreen />
            }
          </Route>
          <Route path="/newcharacter">
            <CharacterCreator />
          </Route>
        </Switch>
        <Route path="/itemindex">
          <ItemIndex />
        </Route>
        <Route path="/newitem">
          <ItemCreator />
        </Route>
      </div>

      <AppModal characterId={characterId} content={actionMatch?.params.action} />

      <footer className={classes.footer}></footer>
    </div>
  );
}

export default App