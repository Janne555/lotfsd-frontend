/* tslint:disable */
/* @relayHash 44c0fb5f21a126eff99e92d25c2dc3e6 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetWalletsQueryVariables = {};
export type characterSheetWalletsQueryResponse = {
    readonly wallets: ReadonlyArray<{
        readonly id: string;
        readonly characterId: string;
        readonly copper: number;
        readonly gold: number;
        readonly silver: number;
    } | null> | null;
};
export type characterSheetWalletsQuery = {
    readonly response: characterSheetWalletsQueryResponse;
    readonly variables: characterSheetWalletsQueryVariables;
};



/*
query characterSheetWalletsQuery {
  wallets {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "wallets",
    "storageKey": null,
    "args": null,
    "concreteType": "Wallet",
    "plural": true,
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
    "name": "characterSheetWalletsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetWalletsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetWalletsQuery",
    "id": null,
    "text": "query characterSheetWalletsQuery {\n  wallets {\n    id\n    characterId\n    copper\n    gold\n    silver\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '438cc9e131733d7d7e6fa7be8d8fbdf4';
export default node;
