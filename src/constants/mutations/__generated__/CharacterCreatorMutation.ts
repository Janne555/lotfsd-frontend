/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CharacterSheetInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CharacterCreatorMutation
// ====================================================

export interface CharacterCreatorMutation_createCharacterSheet {
  __typename: "CharacterSheet";
  id: string;
}

export interface CharacterCreatorMutation {
  createCharacterSheet: CharacterCreatorMutation_createCharacterSheet[] | null;
}

export interface CharacterCreatorMutationVariables {
  characterSheet: CharacterSheetInput;
}
