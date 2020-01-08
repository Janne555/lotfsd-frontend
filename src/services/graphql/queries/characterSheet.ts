import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

const infos: GraphQLTaggedNode = graphql`
  query characterSheetInfosQuery {
     infos {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const allAttributes = graphql`
  query characterSheetAllAttributesQuery {
    allAttributes {
      ...characterSheetAttributes @relay(mask: false)
    }
  }
`

const allCombatOptions = graphql`
  query characterSheetAllCombatOptionsQuery {
    allCombatOptions {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const allCommonActivities = graphql`
  query characterSheetAllCommonActivitiesQuery {
    allCommonActivities {
      ...characterSheetCommonActivities @relay(mask: false)
    }
  }
`

const allSavingThrows = graphql`
  query characterSheetAllSavingThrowsQuery {
    allSavingThrows {
      ...characterSheetSavingThrows @relay(mask: false)
    }
  }
`

const effects = graphql`
  query characterSheetEffectsQuery {
    allCombatOptions {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const retainers = graphql`
  query characterSheetRetainersQuery {
    retainers {
      ...characterSheetRetainer @relay(mask: false)
    }
  }
`

const wallets = graphql`
  query characterSheetWalletsQuery {
    wallets {
      ...characterSheetWallet @relay(mask: false)
    }
  }
`

const info: GraphQLTaggedNode = graphql`
  query characterSheetInfoQuery($id: String!) {
     info(id: $id) {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const attributes = graphql`
  query characterSheetAttributesQuery($id: String!) {
    attributes(id: $id) {
      ...characterSheetAttributes @relay(mask: false)
    }
  }
`

const combatOptions = graphql`
  query characterSheetCombatOptionsQuery($id: String!) {
    combatOptions(id: $id) {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const commonActivities = graphql`
  query characterSheetCommonActivitiesQuery($id: String!) {
    commonActivities(id: $id) {
      ...characterSheetCommonActivities @relay(mask: false)
    }
  }
`

const savingThrows = graphql`
  query characterSheetSavingThrowsQuery($id: String!) {
    savingThrows(id: $id) {
      ...characterSheetSavingThrows @relay(mask: false)
    }
  }
`

const effect = graphql`
  query characterSheetEffectQuery($id: String!) {
    effect(id: $id) {
      ...characterSheetEffect @relay(mask: false)
    }
  }
`

const retainer = graphql`
  query characterSheetRetainerQuery($id: String!) {
    retainer(id: $id) {
      ...characterSheetRetainer @relay(mask: false)
    }
  }
`

const wallet = graphql`
  query characterSheetWalletQuery($id: String!) {
    wallet(id: $id) {
      ...characterSheetWallet @relay(mask: false)
    }
  }
`

export {
  infos,
  allAttributes,
  allCombatOptions,
  allCommonActivities,
  allSavingThrows,
  effects,
  retainers,
  wallets,
  info,
  attributes,
  combatOptions,
  commonActivities,
  savingThrows,
  effect,
  retainer,
  wallet
}