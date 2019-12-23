import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../../hooks'
import { selectCharacters } from '../../../Redux/selectors'
import Character from './Character'
import Button from '../../_shared/Button'
import CharacterListWrapper from './CharacterListWrapper'

const useStyles = createUseStyles((theme: Theme) => ({
  characterList: {
    width: '100%',
    overflow: 'scroll'
  },
  list: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    margin: '1rem'
  }
}))


export default function CharacterList() {
  const classes = useStyles()
  const characters = useSelector(selectCharacters)

  return (
    <div className={classes.characterList}>
      <div className={classes.list}>
        {
          characters.map(name => (
            <CharacterListWrapper to={`/characters/${name}`}>
              <Character name={name} />
            </CharacterListWrapper>
          ))
        }
        <CharacterListWrapper to="/newcharacter">
          <Button>
            <h2>Create new</h2>
          </Button>
        </CharacterListWrapper>
      </div>
    </div>
  )
}
