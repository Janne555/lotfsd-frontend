
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode, commitMutation } from 'relay-runtime'
import { environment } from '../../api'

const mutation: GraphQLTaggedNode = graphql`
  mutation addInfoMutation($info: InfoInput!) {
    addInfo(info: $info) {
      ...foo
    }
  }
`

function addInfo(characterSheet: Info) {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        characterSheet
      },
      onCompleted: (response, errors) => {
        console.log(response)
      }
    }
  )
}

export default addInfo