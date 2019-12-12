import React from 'react'
import CharacterSheet from './Components/CharacterSheet/CharacterSheet'
import { createUseStyles } from 'react-jss'
import NavBar from './Components/Interface/NavBar'

const useStyles = createUseStyles((theme: Theme) => ({
  app: {
    display: 'grid',
    gridTemplateRows: 'auto-fit',
    justifyContent: 'center'
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <NavBar />
      <CharacterSheet />
    </div>
  );
}

export default App