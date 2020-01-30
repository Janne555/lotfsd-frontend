import { gql } from 'apollo-boost'

const ITEMS_QUERY = gql`
query ItemsQuery {
  items {
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

export { ITEMS_QUERY }