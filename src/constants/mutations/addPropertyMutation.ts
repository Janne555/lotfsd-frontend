import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

const ADD_PROPERTY_MUTATION = gql`
  mutation AddProperty($property: PropertyInput!, $characterSheetId: String!) {
    addProperty(
      property: $property,
      characterSheetId: $characterSheetId
    ) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { ADD_PROPERTY_MUTATION }