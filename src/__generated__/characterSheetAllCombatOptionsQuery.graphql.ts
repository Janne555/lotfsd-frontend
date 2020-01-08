/* tslint:disable */
/* @relayHash 1e20e446e41bfa426112c12189289a1e */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetAllCombatOptionsQueryVariables = {};
export type characterSheetAllCombatOptionsQueryResponse = {
    readonly allCombatOptions: ReadonlyArray<{
        readonly id: string;
        readonly characterId: string;
        readonly standard: boolean;
        readonly parry: boolean;
        readonly improvedParry: boolean;
        readonly press: boolean;
        readonly defensive: boolean;
    } | null> | null;
};
export type characterSheetAllCombatOptionsQuery = {
    readonly response: characterSheetAllCombatOptionsQueryResponse;
    readonly variables: characterSheetAllCombatOptionsQueryVariables;
};



/*
query characterSheetAllCombatOptionsQuery {
  allCombatOptions {
    id
    characterId
    standard
    parry
    improvedParry
    press
    defensive
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allCombatOptions",
    "storageKey": null,
    "args": null,
    "concreteType": "CombatOptions",
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
        "name": "standard",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "parry",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "improvedParry",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "press",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "defensive",
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
    "name": "characterSheetAllCombatOptionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAllCombatOptionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetAllCombatOptionsQuery",
    "id": null,
    "text": "query characterSheetAllCombatOptionsQuery {\n  allCombatOptions {\n    id\n    characterId\n    standard\n    parry\n    improvedParry\n    press\n    defensive\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e2658201283a8eeb90572e13517a300c';
export default node;
