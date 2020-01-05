
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

const info: GraphQLTaggedNode = graphql`
  query characterSheetInfoQuery {
     infos {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const QUERIES = {
  info
}

export default QUERIES