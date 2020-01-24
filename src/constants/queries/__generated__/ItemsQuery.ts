/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ItemsQuery
// ====================================================

export interface ItemsQuery_items {
  __typename: "Item";
  name: string;
  id: string;
}

export interface ItemsQuery {
  items: ItemsQuery_items[] | null;
}
