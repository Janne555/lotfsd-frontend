/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CharacterSheetInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CharacterCreatorMutation
// ====================================================

export interface CharacterCreatorMutation_createCharacterSheet {
  __typename: "CharacterSheet";
  name: string;
  class: string;
  id: string;
}

export interface CharacterCreatorMutation {
  createCharacterSheet: CharacterCreatorMutation_createCharacterSheet;
}

export interface CharacterCreatorMutationVariables {
  characterSheet: CharacterSheetInput;
}
