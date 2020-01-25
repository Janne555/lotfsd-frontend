/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ItemQuery
// ====================================================

export interface ItemQuery_item_effects {
  __typename: "ItemEffect";
  id: string;
  method: string;
  target: string;
  value: number;
  type: string;
}

export interface ItemQuery_item {
  __typename: "Item";
  attackBonus: number | null;
  baseArmorClass: number | null;
  damage: string | null;
  description: string;
  effects: ItemQuery_item_effects[] | null;
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

export interface ItemQuery {
  item: ItemQuery_item;
}

export interface ItemQueryVariables {
  id: string;
}
