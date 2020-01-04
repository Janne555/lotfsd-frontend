
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode, commitMutation } from 'relay-runtime'
import { environment } from '../../api'

const mutation: GraphQLTaggedNode = graphql`
  mutation createCharacterSheetMutation($characterSheet: CharacterSheetInput!) {
    createCharacterSheet(characterSheet: $characterSheet) {
      id
      attributeModifiers {
        charisma
      }
    }
  }
`

function createCharacterSheet(characterSheet: CharacterSheet) {
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

export default createCharacterSheet