import React from 'react'
import { createUseStyles } from 'react-jss'
import Character from './Character'
import CharacterListWrapper from './CharacterListWrapper'
import { QueryRenderer } from 'react-relay'
import { useRelayEnvironment } from 'relay-hooks'
import graphql from 'babel-plugin-relay/macro'
import { CharacterListQuery } from '../../../__generated__/CharacterListQuery.graphql'

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
  characters: Character[]
}

function CharacterList({ characters }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.characterList}>
      <div className={classes.list}>
        {
          characters.map(({ name, class: className }) => (
            <CharacterListWrapper key={name} to={`/characters/${name}`}>
              <Character characterClass={className} name={name} />
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

function Query(props: any) {
  const environment = useRelayEnvironment()

  return (
    <QueryRenderer<CharacterListQuery>
      environment={environment}
      query={graphql`
        query CharacterListQuery {
          characterSheets {
            name
            class
          }
        }
      `}
      variables={{}}
      render={({ props }) => {
        if (props?.characterSheets) {
          const characters: Character[] = props?.characterSheets?.filter((e): e is Character => e !== null) ?? []
          return <CharacterList characters={characters} />
        }
      }}
    />
  )
}

export default Query
