/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CharacterSheetQuery
// ====================================================

export interface CharacterSheetQuery_characterSheet_effects {
  __typename: "Effect";
  id: string;
  method: string;
  target: string;
  type: string;
  value: number;
}

export interface CharacterSheetQuery_characterSheet_retainers {
  __typename: "Retainer";
  class: string | null;
  hitpoints: number | null;
  id: string;
  level: number | null;
  name: string;
  position: string | null;
  share: number | null;
  wage: number | null;
}

export interface CharacterSheetQuery_characterSheet_properties {
  __typename: "Property";
  description: string;
  id: string;
  location: string;
  name: string;
  rent: number;
  value: number;
}

export interface CharacterSheetQuery_characterSheet_languagesList {
  __typename: "Language";
  id: string;
  name: string;
  known: boolean;
}

export interface CharacterSheetQuery_characterSheet {
  __typename: "CharacterSheet";
  id: string;
  name: string;
  experience: number;
  class: string;
  race: string;
  age: number;
  gender: string;
  alignment: string;
  attackBonus: number;
  currentHp: number;
  maxHp: number;
  surpriseChance: number;
  paralyze: number;
  poison: number;
  breathWeapon: number;
  magicalDevice: number;
  magic: number;
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  architecture: number;
  bushcraft: number;
  climbing: number;
  languages: number;
  openDoors: number;
  search: number;
  sleightOfHand: number;
  sneakAttack: number;
  stealth: number;
  tinkering: number;
  copper: number;
  silver: number;
  gold: number;
  standard: boolean;
  parry: boolean;
  improvedParry: boolean;
  press: boolean;
  defensive: boolean;
  effects: CharacterSheetQuery_characterSheet_effects[];
  retainers: CharacterSheetQuery_characterSheet_retainers[];
  properties: CharacterSheetQuery_characterSheet_properties[];
  languagesList: CharacterSheetQuery_characterSheet_languagesList[];
}

export interface CharacterSheetQuery {
  characterSheet: CharacterSheetQuery_characterSheet | null;
}

export interface CharacterSheetQueryVariables {
  id: string;
}
