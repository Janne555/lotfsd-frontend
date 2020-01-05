
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

const info: GraphQLTaggedNode = graphql`
  query characterSheetInfoQuery {
     infos {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const allAttributes = graphql`
  query characterSheetAttributesQuery {
    allAttributes {
      ...characterSheetAttributes @relay(mask: false)
    }
  }
`

const allCombatOptions = graphql`
  query characterSheetCombatOptionsQuery {
    allCombatOptions {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const allCommonActivities = graphql`
  query characterSheetCommonActivitiesQuery {
    allCommonActivities {
      ...characterSheetCommonActivities @relay(mask: false)
    }
  }
`

const allSavingThrows = graphql`
  query characterSheetSavingThrowsQuery {
    allSavingThrows {
      ...characterSheetSavingThrows @relay(mask: false)
    }
  }
`

const effects = graphql`
  query characterSheetEffectQuery {
    allCombatOptions {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const retainers = graphql`
  query characterSheetRetainerQuery {
    retainers {
      ...characterSheetRetainer @relay(mask: false)
    }
  }
`

const wallets = graphql`
  query characterSheetWalletQuery {
    wallets {
      ...characterSheetWallet @relay(mask: false)
    }
  }
`

const QUERIES = {
  info
}

export default QUERIES