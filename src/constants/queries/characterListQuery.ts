import { gql } from 'apollo-boost'

const characterListQuery = gql`
query CharacterListQuery {
  characterSheets {
    name
    class
    id
  }
}
`

export default characterListQuery