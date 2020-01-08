/* tslint:disable */
/* @relayHash 4d8a2a7762def3d1e831d16d861724c7 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetAllSavingThrowsQueryVariables = {};
export type characterSheetAllSavingThrowsQueryResponse = {
    readonly allSavingThrows: ReadonlyArray<{
        readonly id: string;
        readonly characterId: string;
        readonly paralyze: number;
        readonly poison: number;
        readonly breathWeapon: number;
        readonly magicalDevice: number;
        readonly magic: number;
    } | null> | null;
};
export type characterSheetAllSavingThrowsQuery = {
    readonly response: characterSheetAllSavingThrowsQueryResponse;
    readonly variables: characterSheetAllSavingThrowsQueryVariables;
};



/*
query characterSheetAllSavingThrowsQuery {
  allSavingThrows {
    id
    characterId
    paralyze
    poison
    breathWeapon
    magicalDevice
    magic
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allSavingThrows",
    "storageKey": null,
    "args": null,
    "concreteType": "SavingThrows",
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
        "name": "paralyze",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "poison",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "breathWeapon",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "magicalDevice",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "magic",
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
    "name": "characterSheetAllSavingThrowsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAllSavingThrowsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetAllSavingThrowsQuery",
    "id": null,
    "text": "query characterSheetAllSavingThrowsQuery {\n  allSavingThrows {\n    id\n    characterId\n    paralyze\n    poison\n    breathWeapon\n    magicalDevice\n    magic\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2c9c15d36831237e08b65d0c25b3fb4f';
export default node;
