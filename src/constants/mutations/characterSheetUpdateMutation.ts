import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

const CHARACTER_SHEET_UPDATE_MUTATION = gql`
  mutation CharacterSheetUpdateMutation($id: String!, $ch: CharacterSheetUpdate!) {
    updateCharacterSheet(id: $id, characterSheet: $ch) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { CHARACTER_SHEET_UPDATE_MUTATION }