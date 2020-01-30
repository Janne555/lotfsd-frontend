/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RetainerInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddRetainerMutation
// ====================================================

export interface AddRetainerMutation_addRetainer_effects {
  __typename: "Effect";
  id: string;
  method: string;
  target: string;
  type: string;
  value: number;
}

export interface AddRetainerMutation_addRetainer_retainers {
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

export interface AddRetainerMutation_addRetainer_properties {
  __typename: "Property";
  description: string;
  id: string;
  location: string;
  name: string;
  rent: number;
  value: number;
}

export interface AddRetainerMutation_addRetainer_languagesList {
  __typename: "Language";
  id: string;
  name: string;
  known: boolean;
}

export interface AddRetainerMutation_addRetainer_inventory {
  __typename: "ItemInstance";
  equipped: boolean;
  id: string;
  itemId: string;
}

export interface AddRetainerMutation_addRetainer {
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
  effects: AddRetainerMutation_addRetainer_effects[];
  retainers: AddRetainerMutation_addRetainer_retainers[];
  properties: AddRetainerMutation_addRetainer_properties[];
  languagesList: AddRetainerMutation_addRetainer_languagesList[];
  inventory: AddRetainerMutation_addRetainer_inventory[];
}

export interface AddRetainerMutation {
  addRetainer: AddRetainerMutation_addRetainer;
}

export interface AddRetainerMutationVariables {
  retainer: RetainerInput;
  characterId: string;
}
