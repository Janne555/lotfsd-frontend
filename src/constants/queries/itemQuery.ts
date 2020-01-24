import { gql } from 'apollo-boost'

const ITEM_QUERY = gql`
  query Item($id: String!) {
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