
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

const characterSheets: GraphQLTaggedNode = graphql`
  query characterSheetsQuery {
     characterSheets {
      id
      attributeModifiers {
        charisma
      }
    }
  }
`

export default characterSheets