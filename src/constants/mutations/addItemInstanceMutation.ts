import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

const ADD_ITEM_INSTANCE_MUTATION = gql`
  mutation AddItemInstance($itemId: String!, $equipped: Boolean!, $characterSheetId: String!) {
    addItemInstance(
      itemId: $itemId,
      equipped: $equipped,
      characterSheetId: $characterSheetId
    ) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { ADD_ITEM_INSTANCE_MUTATION }