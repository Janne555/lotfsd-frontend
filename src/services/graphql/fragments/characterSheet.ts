
import graphql from 'babel-plugin-relay/macro'

const info = graphql`
  fragment characterSheetInfo on Info {
    age
    name
    alignment
  }
`