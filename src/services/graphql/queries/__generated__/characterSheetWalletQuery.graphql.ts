/* tslint:disable */
/* @relayHash 82d8f79f67663aefe9f90820ebcb2134 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetWalletQueryVariables = {};
export type characterSheetWalletQueryResponse = {
    readonly wallets: ReadonlyArray<{
        readonly id: string;
        readonly characterId: string;
        readonly copper: number;
        readonly gold: number;
        readonly silver: number;
    } | null> | null;
};
export type characterSheetWalletQuery = {
    readonly response: characterSheetWalletQueryResponse;
    readonly variables: characterSheetWalletQueryVariables;
};



/*
query characterSheetWalletQuery {
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
    "name": "characterSheetWalletQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetWalletQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetWalletQuery",
    "id": null,
    "text": "query characterSheetWalletQuery {\n  wallets {\n    id\n    characterId\n    copper\n    gold\n    silver\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '343b9493143803ac50def913acd33405';
export default node;
