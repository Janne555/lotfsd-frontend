import React from 'react'
import CharacterSheet from './Components/CharacterSheet/CharacterSheet'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  app: {
  },
  '@media (min-width: 1024px)': {
    app: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <CharacterSheet />
    </div>
  );
}

export default App