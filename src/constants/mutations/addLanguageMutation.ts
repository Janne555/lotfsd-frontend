import { gql } from 'apollo-boost'
import { CHARACTER_SHEET_FRAGMENT } from '../fragments/characterSheetFragment'

const ADD_LANGUAGE_MUTATION = gql`
  mutation AddLanguageMutation($language: LanguageInput!, $characterId: String!) {
    addLanguage(language: $language, characterSheetId: $characterId) {
      ...CharacterSheetFragment
    }
  }
  ${CHARACTER_SHEET_FRAGMENT}
`

export { ADD_LANGUAGE_MUTATION }