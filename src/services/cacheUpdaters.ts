import { MutationUpdaterFn } from 'apollo-client'
import { CharacterSheetQuery, CharacterSheetQueryVariables } from '../constants/queries/__generated__/CharacterSheetQuery'
import { CharacterSheetUdpateMutation } from '../constants/mutations/__generated__/CharacterSheetUdpateMutation'
import { CHARACTER_SHEET_QUERY } from '../constants'

function updateCharacterSheet(characterId?: string): MutationUpdaterFn<CharacterSheetUdpateMutation> {
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