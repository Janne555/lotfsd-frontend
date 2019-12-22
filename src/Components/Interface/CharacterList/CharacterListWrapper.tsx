import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { useNavMenuContext } from '../NavMenu/NavBar'

const useStyles = createUseStyles((theme: Theme) => ({
  character: {
    height: 150,
    width: 150,
    backgroundColor: theme.colorGrey,
    display: 'flex',
    justifyItems: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
    border: '7px solid black',
    '& img': {
      height: 100,
      width: 100,
      marginTop: '1rem'
    },
    '& h3': {
      justifySelf: 'end'
    }
  }
}))



function CharacterListWrapper({ children }: { children: ReactNode }) {
  const classes = useStyles()
  const { onHide } = useNavMenuContext()

  return (
    <div className={classes.character} onClick={onHide}>
      {children}
    </div>
  )
}

export default CharacterListWrapper