
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'
import {
  fetchQuery
} from 'relay-runtime'
import { environment } from '../../api'

const query: GraphQLTaggedNode = graphql`
  query characterSheetsQuery {
     characterSheets {
      id
      attributeModifiers {
        charisma
      }
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