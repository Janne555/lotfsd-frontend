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
import { useLogin, useScreenResizeEvent } from './hooks'
import { useQuery } from '@apollo/react-hooks'
import { CHARACTER_LIST_QUERY, ITEMS_QUERY } from './constants'
import { CharacterListQuery } from '../__generated__/apolloTypes/CharacterListQuery'
import SpeedDial from './Components/Interface/SpeedDial'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ItemsQuery } from '../__generated__/apolloTypes/ItemsQuery'

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
  error: {
    position: 'absolute',
    zIndex: 1000,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '@media (max-width: 1100px)': {
    app: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}))

function Main() {
  const classes = useStyles()
  const characterNameMatch = useRouteMatch<{ character: string }>('/characters/:character')
  const actionMatch = useRouteMatch<{ action: string }>('/characters/:character/:action')
  const { data, loading, error } = useQuery<CharacterListQuery>(CHARACTER_LIST_QUERY)
  const { data: data2, loading: loading2, error: error2 } = useQuery<ItemsQuery>(ITEMS_QUERY)
  const { logout } = useLogin()
  const isMobile = useScreenResizeEvent(width => width < 1100)

  if (loading || loading2) {
    return <CircularProgress />
  }

  if (error || error2) {
    return (
      <div className={classes.error}>
        <h3>Failed to connect to server</h3>
      </div>
    )
  }

  if (!data || !data.characterSheets || !data2 || !data2.items) {
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
        <NavItem name="Logout" end onClick={logout} />
      </NavBar>
      <div className={classes.body}>
        <Switch>
          <Route path="/characters/:character">
            {characterId && characterNameMatch?.params.character &&
              <CharacterSheet characterId={characterId} characterName={characterNameMatch?.params.character} itemIndex={data2.items} />
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
        <Route exact path="/login">
          <Redirect to="/characters" />
        </Route>
      </div>

      <AppModal characterId={characterId} content={actionMatch?.params.action} characterName={characterNameMatch?.params.character} />

      <footer className={classes.footer}></footer>

      {isMobile &&
        <SpeedDial />
      }
    </div>
  );
}

export default Main