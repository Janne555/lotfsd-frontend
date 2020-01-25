/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddLanguageMutation
// ====================================================

export interface AddLanguageMutation_addLanguage_effects {
  __typename: "Effect";
  id: string;
  method: string;
  target: string;
  type: string;
  value: number;
}

export interface AddLanguageMutation_addLanguage_retainers {
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

export interface AddLanguageMutation_addLanguage_properties {
  __typename: "Property";
  description: string;
  id: string;
  location: string;
  name: string;
  rent: number;
  value: number;
}

export interface AddLanguageMutation_addLanguage_languagesList {
  __typename: "Language";
  id: string;
  name: string;
  known: boolean;
}

export interface AddLanguageMutation_addLanguage {
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
  effects: AddLanguageMutation_addLanguage_effects[];
  retainers: AddLanguageMutation_addLanguage_retainers[];
  properties: AddLanguageMutation_addLanguage_properties[];
  languagesList: AddLanguageMutation_addLanguage_languagesList[];
}

export interface AddLanguageMutation {
  addLanguage: AddLanguageMutation_addLanguage;
}

export interface AddLanguageMutationVariables {
  language: LanguageInput;
  characterId: string;
}
