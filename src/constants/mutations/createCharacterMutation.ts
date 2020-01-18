import { gql } from 'apollo-boost'

const CREATE_CHARACTER_MUTATION = gql`
  mutation CharacterCreatorMutation($characterSheet: CharacterSheetInput!) {
    createCharacterSheet(characterSheet: $characterSheet) {
      name
      class
      id
    }
  }
`

export { CREATE_CHARACTER_MUTATION }