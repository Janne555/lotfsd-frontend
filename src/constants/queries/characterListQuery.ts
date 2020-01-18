import { gql } from 'apollo-boost'

const CHARACTER_LIST_QUERY = gql`
query CharacterListQuery {
  characterSheets {
    name
    class
    id
  }
}
`

export { CHARACTER_LIST_QUERY }