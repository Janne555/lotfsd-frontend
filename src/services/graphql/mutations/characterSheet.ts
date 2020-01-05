
import graphql from 'babel-plugin-relay/macro'
import { GraphQLTaggedNode } from 'relay-runtime'

const addInfo: GraphQLTaggedNode = graphql`
  mutation characterSheetAddInfoMutation($info: InfoInput!) {
     addInfo(info: $info) {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const addAttributes = graphql`
  mutation characterSheetAddAttributesMutation($attributes: AttributesInput!) {
    addAttributes(attributes: $attributes) {
      ...characterSheetAttributes @relay(mask: false)
    }
  }
`

const addCombatOptions = graphql`
  mutation characterSheetAddCombatOptionsMutation($combatOptions: CombatOptionsInput!) {
    addCombatOptions(combatOptions: $combatOptions) {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const addCommonActivities = graphql`
  mutation characterSheetAddCommonActivitiesMutation($commonActivities: CommonActivitiesInput!) {
    addCommonActivities(commonActivities: $commonActivities) {
      ...characterSheetCommonActivities @relay(mask: false)
    }
  }
`

const addSavingThrows = graphql`
  mutation characterSheetAddSavingThrowsMutation($savingThrows: SavingThrowsInput!) {
    addSavingThrows(savingThrows: $savingThrows) {
      ...characterSheetSavingThrows @relay(mask: false)
    }
  }
`

const addEffect = graphql`
  mutation characterSheetAddEffectMutation($effect: EffectInput!) {
    addEffect(effect: $effect) {
      ...characterSheetEffect @relay(mask: false)
    }
  }
`

const addRetainer = graphql`
  mutation characterSheetAddRetainerMutation($retainer: RetainerInput!) {
    addRetainer(retainer: $retainer) {
      ...characterSheetRetainer @relay(mask: false)
    }
  }
`

const addWallet = graphql`
  mutation characterSheetAddWalletMutation($wallet: WalletInput!) {
    addWallet(wallet: $wallet) {
      ...characterSheetWallet @relay(mask: false)
    }
  }
`

//replacers

const replaceInfo: GraphQLTaggedNode = graphql`
  mutation characterSheetReplaceInfoMutation($info: InfoInput!) {
     replaceInfo(info: $info) {
      ...characterSheetInfo @relay(mask: false)
    }
  }
`

const replaceAttributes = graphql`
  mutation characterSheetReplaceAttributesMutation($attributes: AttributesInput!) {
    replaceAttributes(attributes: $attributes) {
      ...characterSheetAttributes @relay(mask: false)
    }
  }
`

const replaceCombatOptions = graphql`
  mutation characterSheetReplaceCombatOptionsMutation($combatOptions: CombatOptionsInput!) {
    replaceCombatOptions(combatOptions: $combatOptions) {
      ...characterSheetCombatOptions @relay(mask: false)
    }
  }
`

const replaceCommonActivities = graphql`
  mutation characterSheetReplaceCommonActivitiesMutation($commonActivities: CommonActivitiesInput!) {
    replaceCommonActivities(commonActivities: $commonActivities) {
      ...characterSheetCommonActivities @relay(mask: false)
    }
  }
`

const replaceSavingThrows = graphql`
  mutation characterSheetReplaceSavingThrowsMutation($savingThrows: SavingThrowsInput!) {
    replaceSavingThrows(savingThrows: $savingThrows) {
      ...characterSheetSavingThrows @relay(mask: false)
    }
  }
`

const replaceEffect = graphql`
  mutation characterSheetReplaceEffectMutation($effect: EffectInput!) {
    replaceEffect(effect: $effect) {
      ...characterSheetEffect @relay(mask: false)
    }
  }
`

const replaceRetainer = graphql`
  mutation characterSheetReplaceRetainerMutation($retainer: RetainerInput!) {
    replaceRetainer(retainer: $retainer) {
      ...characterSheetRetainer @relay(mask: false)
    }
  }
`

const replaceWallet = graphql`
  mutation characterSheetReplaceWalletMutation($wallet: WalletInput!) {
    replaceWallet(wallet: $wallet) {
      ...characterSheetWallet @relay(mask: false)
    }
  }
`

const MUTATIONS = {
  addInfo,
  addAttributes,
  addCombatOptions,
  addCommonActivities,
  addEffect,
  addRetainer,
  addSavingThrows,
  addWallet,
  replaceAttributes,
  replaceCombatOptions,
  replaceCommonActivities,
  replaceEffect,
  replaceInfo,
  replaceRetainer,
  replaceSavingThrows,
  replaceWallet
}

export default MUTATIONS