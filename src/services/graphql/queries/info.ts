
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'
import { fetchQuery } from 'relay-runtime'
import { environment } from '../../api'

const query: GraphQLTaggedNode = graphql`
  query infoQuery {
     infos {
      ...foo @relay(mask: false)
    }
  }
`

const query2: GraphQLTaggedNode = graphql`
  query info2Query($id: String!) {
     info(id: $id) {
      ...foo @relay(mask: false)
    }
  }
`

type Response = {
  characterSheets: CharacterSheet[]
}

function fetchCharacterSheets(): Promise<Response> {
  return fetchQuery<OperationType<Response>>(environment, query, {})
}

export default fetchCharacterSheets