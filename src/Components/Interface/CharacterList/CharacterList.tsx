import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../../hooks'
import { selectCharacters } from '../../../Redux/selectors'
import Character from './Character'

const useStyles = createUseStyles((theme: Theme) => ({
  characterList: {
    width: '100%',
    overflow: 'scroll'
  },
  list: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
  }
}))


export default function CharacterList() {
  const classes = useStyles()
  const characters = useSelector(selectCharacters)

  return (
    <div className={classes.characterList}>
      <div className={classes.list}>
        {
          characters.map(name => <Character name={name} />)
        }
      </div>
    </div>
  )
}
