import React from 'react'
import CharacterSheet from './Components/CharacterSheet/CharacterSheet'
import { createUseStyles } from 'react-jss'
import NavBar from './Components/Interface/NavMenu/NavBar'
import Login from './Components/Interface/Login'
import NavItem from './Components/Interface/NavMenu/NavItem'
import { useSelector } from './hooks'
import { selectIsLoggedIn } from './Redux/selectors'

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
  // navBar: {
  //   backgroundColor: 'purple'
  // },
  // article: {
  //   height: '2000px',
  //   backgroundColor: 'gray'
  // },
  footer: {
    backgroundColor: 'pink'
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
      {/* <header className={classes.navBar}><div></div></header>
      <article className={classes.article}></article>
      <footer className={classes.footer}></footer> */}
      <NavBar>
        <NavItem name="Characters">
          hei
          </NavItem>
        <NavItem name="Campaigns">
          moi
          </NavItem>
        <NavItem name="Login" end />
      </NavBar>
      <CharacterSheet />
      <footer className={classes.footer}></footer>
    </div>
  );
}

export default App