import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../../hooks'
import { selectCharacters } from '../../../Redux/selectors'
import Character from './Character'
import Button from '../../_shared/Button'
import { Link } from 'react-router-dom'
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
            <Link to={`/characters/${name}`}>
              <CharacterListWrapper>
                <Character name={name} />
              </CharacterListWrapper>
            </Link>
          ))
        }
        <Link to="/characters/new">
          <CharacterListWrapper>
            <Button>
              <h2>Create new</h2>
            </Button>
          </CharacterListWrapper>
        </Link>
      </div>
    </div>
  )
}
