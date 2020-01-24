/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Item
// ====================================================

export interface Item_item_effects {
  __typename: "ItemEffect";
  id: string;
  method: string;
  target: string;
  value: number;
}

export interface Item_item {
  __typename: "Item";
  attackBonus: number | null;
  baseArmorClass: number | null;
  damage: string | null;
  description: string;
  effects: (Item_item_effects | null)[] | null;
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

export interface Item {
  item: Item_item[] | null;
}

export interface ItemVariables {
  id: string;
}
