/* tslint:disable */
/* @relayHash 0a773de4de1d4633fbc0a83cd3d865b2 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetWalletQueryVariables = {
    id: string;
};
export type characterSheetWalletQueryResponse = {
    readonly wallet: {
        readonly id: string;
        readonly characterId: string;
        readonly copper: number;
        readonly gold: number;
        readonly silver: number;
    } | null;
};
export type characterSheetWalletQuery = {
    readonly response: characterSheetWalletQueryResponse;
    readonly variables: characterSheetWalletQueryVariables;
};



/*
query characterSheetWalletQuery(
  $id: String!
) {
  wallet(id: $id) {
    id
    characterId
    copper
    gold
    silver
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "wallet",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Wallet",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "characterId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "copper",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "gold",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "silver",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "characterSheetWalletQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetWalletQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetWalletQuery",
    "id": null,
    "text": "query characterSheetWalletQuery(\n  $id: String!\n) {\n  wallet(id: $id) {\n    id\n    characterId\n    copper\n    gold\n    silver\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'dbe10c0cdaa0471fbd7c804310723b87';
export default node;
