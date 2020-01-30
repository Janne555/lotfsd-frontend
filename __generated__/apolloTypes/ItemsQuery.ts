/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ItemsQuery
// ====================================================

export interface ItemsQuery_items_effects {
  __typename: "ItemEffect";
  id: string;
  method: string;
  target: string;
  value: number;
  type: string;
}

export interface ItemsQuery_items {
  __typename: "Item";
  attackBonus: number | null;
  baseArmorClass: number | null;
  damage: string | null;
  description: string;
  effects: ItemsQuery_items_effects[] | null;
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

export interface ItemsQuery {
  items: ItemsQuery_items[] | null;
}
