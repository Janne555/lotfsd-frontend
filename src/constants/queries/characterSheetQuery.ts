import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

var CHARACTER_SHEET_QUERY = gql`
  query CharacterSheetQuery($id: String!) {
    characterSheet(id: $id) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { CHARACTER_SHEET_QUERY }