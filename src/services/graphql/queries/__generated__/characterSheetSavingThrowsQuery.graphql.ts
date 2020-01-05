/* tslint:disable */
/* @relayHash 54887459b1e909b1767b064d35b50d2d */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetSavingThrowsQueryVariables = {};
export type characterSheetSavingThrowsQueryResponse = {
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
export type characterSheetSavingThrowsQuery = {
    readonly response: characterSheetSavingThrowsQueryResponse;
    readonly variables: characterSheetSavingThrowsQueryVariables;
};



/*
query characterSheetSavingThrowsQuery {
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
    "name": "characterSheetSavingThrowsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetSavingThrowsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetSavingThrowsQuery",
    "id": null,
    "text": "query characterSheetSavingThrowsQuery {\n  allSavingThrows {\n    id\n    characterId\n    paralyze\n    poison\n    breathWeapon\n    magicalDevice\n    magic\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4390b3dd24f6a735c0db9f8397ddd8db';
export default node;
