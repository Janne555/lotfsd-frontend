/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ItemInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateItem
// ====================================================

export interface CreateItem_createItem_effects {
  __typename: "ItemEffect";
  id: string;
  method: string;
  target: string;
  value: number;
  type: string;
}

export interface CreateItem_createItem {
  __typename: "Item";
  attackBonus: number | null;
  baseArmorClass: number | null;
  damage: string | null;
  description: string;
  effects: CreateItem_createItem_effects[] | null;
  encumbrance: number | null;
  encumbrancePoints: number;
  id: string;
  name: string;
  rangeLong: number | null;
  rangeMedium: number | null;
  rangeShort: number | null;
  stackSize: number;
  type: string;
}

export interface CreateItem {
  createItem: CreateItem_createItem;
}

export interface CreateItemVariables {
  item: ItemInput;
}
