
import graphql from 'babel-plugin-relay/macro'

const frag = graphql`
  fragment foo on Info {
    age
    name
    alignment
  }
`