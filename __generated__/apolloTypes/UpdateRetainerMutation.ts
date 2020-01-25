/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RetainerUpdate } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateRetainerMutation
// ====================================================

export interface UpdateRetainerMutation_updateRetainer_effects {
  __typename: "Effect";
  id: string;
  method: string;
  target: string;
  type: string;
  value: number;
}

export interface UpdateRetainerMutation_updateRetainer_retainers {
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

export interface UpdateRetainerMutation_updateRetainer_properties {
  __typename: "Property";
  description: string;
  id: string;
  location: string;
  name: string;
  rent: number;
  value: number;
}

export interface UpdateRetainerMutation_updateRetainer_languagesList {
  __typename: "Language";
  id: string;
  name: string;
  known: boolean;
}

export interface UpdateRetainerMutation_updateRetainer {
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
  effects: UpdateRetainerMutation_updateRetainer_effects[];
  retainers: UpdateRetainerMutation_updateRetainer_retainers[];
  properties: UpdateRetainerMutation_updateRetainer_properties[];
  languagesList: UpdateRetainerMutation_updateRetainer_languagesList[];
}

export interface UpdateRetainerMutation {
  updateRetainer: UpdateRetainerMutation_updateRetainer;
}

export interface UpdateRetainerMutationVariables {
  retainerUpdate: RetainerUpdate;
  characterId: string;
  retainerId: string;
}
