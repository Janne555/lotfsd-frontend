import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { useNavMenuContext } from '../NavMenu/NavBar'
import { useHistory } from 'react-router-dom'

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
    cursor: 'pointer',
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

function CharacterListWrapper({ children, to }: { children: ReactNode, to: string }) {
  const classes = useStyles()
  const { onHide } = useNavMenuContext()
  const history = useHistory()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    history.push(to)
    onHide(e)
  }

  return (
    <button className={classes.character} onClick={handleClick}>
      {children}
    </button>
  )
}

export default CharacterListWrapper