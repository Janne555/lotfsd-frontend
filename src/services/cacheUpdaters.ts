import { MutationUpdaterFn } from 'apollo-client'
import { CharacterSheetQuery, CharacterSheetQueryVariables } from '../../__generated__/apolloTypes/CharacterSheetQuery'
import { CharacterSheetUpdateMutation } from '../../__generated__/apolloTypes/CharacterSheetUpdateMutation'
import { CHARACTER_SHEET_QUERY } from '../constants'

function updateCharacterSheet(characterId?: string): MutationUpdaterFn<CharacterSheetUpdateMutation> {
  return function (cache, { data }) {
    if (data && characterId) {
      cache.writeQuery<CharacterSheetQuery, CharacterSheetQueryVariables>({
        data: { characterSheet: data.updateCharacterSheet },
        query: CHARACTER_SHEET_QUERY,
        variables: { id: characterId }
      })
    }
  }
}

export {
  updateCharacterSheet
}