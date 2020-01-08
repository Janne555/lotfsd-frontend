/* tslint:disable */
/* @relayHash 71ee6e85daf5776c39faeca55f4d87f7 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetSavingThrowsQueryVariables = {
    id: string;
};
export type characterSheetSavingThrowsQueryResponse = {
    readonly savingThrows: {
        readonly id: string;
        readonly characterId: string;
        readonly paralyze: number;
        readonly poison: number;
        readonly breathWeapon: number;
        readonly magicalDevice: number;
        readonly magic: number;
    } | null;
};
export type characterSheetSavingThrowsQuery = {
    readonly response: characterSheetSavingThrowsQueryResponse;
    readonly variables: characterSheetSavingThrowsQueryVariables;
};



/*
query characterSheetSavingThrowsQuery(
  $id: String!
) {
  savingThrows(id: $id) {
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
    "name": "savingThrows",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "SavingThrows",
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetSavingThrowsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetSavingThrowsQuery",
    "id": null,
    "text": "query characterSheetSavingThrowsQuery(\n  $id: String!\n) {\n  savingThrows(id: $id) {\n    id\n    characterId\n    paralyze\n    poison\n    breathWeapon\n    magicalDevice\n    magic\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ccd4a970bd27e86bc22069e06a1638a6';
export default node;
