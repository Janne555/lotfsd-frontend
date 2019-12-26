import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../../hooks'
import { selectCharacters } from '../../../Redux/selectors'
import Character from './Character'
import CharacterListWrapper from './CharacterListWrapper'

const useStyles = createUseStyles((theme: Theme) => ({
  characterList: {
    width: '100%',
    overflow: (page: boolean) => page ? '' : 'scroll'
  },
  list: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: (page: boolean) => page ? 'center' : '',
    flexWrap: (page: boolean) => page ? 'wrap' : ''
  },
  link: {
    margin: '1rem'
  }
}))

type Props = {
  fullScreen?: boolean
}

export default function CharacterList({ fullScreen }: Props) {
  const classes = useStyles(fullScreen)
  const characters = useSelector(selectCharacters)

  return (
    <div className={classes.characterList}>
      <div className={classes.list}>
        {
          characters.map(name => (
            <CharacterListWrapper key={name} to={`/characters/${name}`}>
              <Character name={name} />
            </CharacterListWrapper>
          ))
        }
        <CharacterListWrapper to="/newcharacter">
          <h2>Create new</h2>
        </CharacterListWrapper>
      </div>
    </div>
  )
}
