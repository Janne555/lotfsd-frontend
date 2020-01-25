import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

const ADD_RETAINER_MUTATION = gql`
  mutation AddRetainerMutation($retainer: RetainerInput!, $characterId: String!) {
    addRetainer(retainer: $retainer, characterSheetId: $characterId) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { ADD_RETAINER_MUTATION }