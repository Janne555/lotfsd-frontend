import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

const UPDATE_RETAINER_MUTATION = gql`
  mutation UpdateRetainerMutation($retainerUpdate: RetainerUpdate!, $characterId: String!, $retainerId: String!) {
    updateRetainer(retainerUpdate: $retainerUpdate, characterSheetId: $characterId, retainerId: $retainerId) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { UPDATE_RETAINER_MUTATION }