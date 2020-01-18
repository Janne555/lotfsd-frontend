import React from 'react'
import CharacterSheet from './Components/CharacterSheet/CharacterSheet'
import { createUseStyles } from 'react-jss'
import NavBar from './Components/Interface/NavMenu/NavBar'
import NavItem from './Components/Interface/NavMenu/NavItem'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import CharacterList from './Components/Interface/CharacterList/CharacterList'
import CharacterCreator from './Components/CharacterCreator/CharacterCreator'
import AppModal from './Components/Interface/Modal/AppModal'
import ItemIndex from './Components/ItemIndex/ItemIndex'
import ItemCreator from './Components/ItemIndex/ItemCreator'
import { useLogin } from './hooks'
import { useQuery } from '@apollo/react-hooks'
import query from './constants/queries/characterListQuery'
import { CharacterListQuery } from './constants/queries/__generated__/characterListQuery'

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

function App() {
  const classes = useStyles()
  const characterNameMatch = useRouteMatch<{ character: string }>('/characters/:character')
  const actionMatch = useRouteMatch<{ action: string }>('/characters/:character/:action')
  const { data } = useQuery<CharacterListQuery>(query)
  const { logout } = useLogin()

  if (!data || !data.characterSheets) {
    return null
  }

  const characterId = data.characterSheets.find(ch => ch.name === characterNameMatch?.params.character)?.id


  return (
    <div className={classes.app}>
      <NavBar>
        <NavItem name="Characters" to="/characters">
          <CharacterList characters={data.characterSheets} />
        </NavItem>
        <NavItem name="Campaigns" to="/campaigns">
          moi
          </NavItem>
        <NavItem name="Item Index" to="/itemindex" />
        <NavItem name="Login" end onClick={logout} />
      </NavBar>
      <div className={classes.body}>
        <Switch>
          <Route path="/characters/:character">
            {characterId && characterNameMatch?.params.character &&
              <CharacterSheet characterId={characterId} characterName={characterNameMatch?.params.character} />
            }
          </Route>
          <Route exact path="/characters">
            <CharacterList characters={data.characterSheets} />
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
        <Route exact path="/">
          <Redirect to="/characters" />
        </Route>
      </div>

      <AppModal characterId={characterId} content={actionMatch?.params.action} characterName={characterNameMatch?.params.character} />

      <footer className={classes.footer}></footer>
    </div>
  );
}

export default App