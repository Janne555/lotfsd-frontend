import { gql } from 'apollo-boost'

const ITEMS_QUERY = gql`
query ItemsQuery {
  items {
    name
    id
  }
}
`

export { ITEMS_QUERY }