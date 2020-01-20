/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CharacterListQuery
// ====================================================

export interface CharacterListQuery_characterSheets {
  __typename: "CharacterSheet";
  name: string;
  class: string;
  id: string;
}

export interface CharacterListQuery {
  characterSheets: CharacterListQuery_characterSheets[] | null;
}
