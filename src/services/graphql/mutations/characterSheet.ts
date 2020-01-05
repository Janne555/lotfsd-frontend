
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

const addInfo: GraphQLTaggedNode = graphql`
  mutation characterSheetAddInfoMutation($info: InfoInput!) {
    addInfo(info: $info) {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const MUTATIONS = {
  addInfo
}

export default MUTATIONS