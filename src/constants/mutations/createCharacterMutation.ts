import { gql } from 'apollo-boost'

const CreateCharacterMutation = gql`
  mutation CharacterCreatorMutation($characterSheet: CharacterSheetInput!) {
    createCharacterSheet(characterSheet: $characterSheet) {
      id
    }
  }
`

export default CreateCharacterMutation