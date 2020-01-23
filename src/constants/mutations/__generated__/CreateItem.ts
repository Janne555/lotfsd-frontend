/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ItemInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateItem
// ====================================================

export interface CreateItem_createItem_effects {
  __typename: "ItemEffect";
  id: string;
  method: string;
  target: string;
  value: number;
}

export interface CreateItem_createItem {
  __typename: "Item";
  attackBonus: number;
  baseArmorClass: number;
  damage: string;
  description: string;
  effects: (CreateItem_createItem_effects | null)[] | null;
  encumbrance: number;
  encumbrancePoints: number;
  id: string;
  name: string;
  rangeLong: number;
  rangeMedium: number;
  rangeShort: number;
  stackSize: number;
  type: string;
}

export interface CreateItem {
  createItem: CreateItem_createItem;
}

export interface CreateItemVariables {
  item: ItemInput;
}
