/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CharacterSheetInput {
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
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  paralyze: number;
  poison: number;
  breathWeapon: number;
  magicalDevice: number;
  magic: number;
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
  effects?: (EffectInput | null)[] | null;
  retainers?: (RetainerInput | null)[] | null;
  properties?: (PropertyInput | null)[] | null;
}

export interface CharacterSheetUpdate {
  name?: string | null;
  experience?: number | null;
  class?: string | null;
  race?: string | null;
  age?: number | null;
  gender?: string | null;
  alignment?: string | null;
  attackBonus?: number | null;
  currentHp?: number | null;
  maxHp?: number | null;
  surpriseChance?: number | null;
  charisma?: number | null;
  constitution?: number | null;
  dexterity?: number | null;
  intelligence?: number | null;
  strength?: number | null;
  wisdom?: number | null;
  paralyze?: number | null;
  poison?: number | null;
  breathWeapon?: number | null;
  magicalDevice?: number | null;
  magic?: number | null;
  architecture?: number | null;
  bushcraft?: number | null;
  climbing?: number | null;
  languages?: number | null;
  openDoors?: number | null;
  search?: number | null;
  sleightOfHand?: number | null;
  sneakAttack?: number | null;
  stealth?: number | null;
  tinkering?: number | null;
  copper?: number | null;
  silver?: number | null;
  gold?: number | null;
  standard?: boolean | null;
  parry?: boolean | null;
  improvedParry?: boolean | null;
  press?: boolean | null;
  defensive?: boolean | null;
}

export interface EffectInput {
  type: string;
  target: string;
  method: string;
  value: number;
}

export interface ItemInstanceInput {
  id: string;
  equipped: boolean;
}

export interface PropertyInput {
  id: string;
  name: string;
  value: number;
  rent: number;
  location: string;
  description: string;
  inventory?: (ItemInstanceInput | null)[] | null;
}

export interface RetainerInput {
  name: string;
  position: string;
  class: string;
  level: number;
  hitpoints: number;
  wage: number;
  share: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
