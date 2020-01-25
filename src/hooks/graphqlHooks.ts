import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables } from '../../__generated__/apolloTypes/CharacterSheetUpdateMutation'
import { CHARACTER_SHEET_UPDATE_MUTATION } from '../constants'
import { updateCharacterSheet } from '../services'

function useCharacterSheetUpdate(characterId?: string) {
  return useMutation<CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables>(CHARACTER_SHEET_UPDATE_MUTATION, {
    update: updateCharacterSheet(characterId),
  })
}

export {
  useCharacterSheetUpdate
}