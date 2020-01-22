import { gql } from 'apollo-boost'

const CREATE_CHARACTER_MUTATION = gql`
  mutation CreateWeapon($item: ItemInput!) {
    createItem(item: $item) {

    }
  }
`

export { CREATE_CHARACTER_MUTATION }