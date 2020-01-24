import { gql } from 'apollo-boost'

const CREATE_ITEM_MUTATION = gql`
  mutation CreateItem($item: ItemInput!) {
    createItem(item: $item) {
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

export { CREATE_ITEM_MUTATION }