import { gql } from 'apollo-boost'

const ITEM_QUERY = gql`
  query ItemQuery($id: String!) {
    item(id: $id) {
      attackBonus
      baseArmorClass
      damage
      description
      effects {
        id
        method
        target
        value
        type
      }
      encumbrance
      encumbrancePoints
      id
      name
      rangeLong
      rangeMedium
      rangeShort
      stackSize
      type
    }
  }
`

export { ITEM_QUERY }