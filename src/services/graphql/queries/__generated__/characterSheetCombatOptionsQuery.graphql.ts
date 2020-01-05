/* tslint:disable */
/* @relayHash 679c79d1f20932595d6cabfa9a9526b7 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetCombatOptionsQueryVariables = {};
export type characterSheetCombatOptionsQueryResponse = {
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
export type characterSheetCombatOptionsQuery = {
    readonly response: characterSheetCombatOptionsQueryResponse;
    readonly variables: characterSheetCombatOptionsQueryVariables;
};



/*
query characterSheetCombatOptionsQuery {
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
    "name": "characterSheetCombatOptionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetCombatOptionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetCombatOptionsQuery",
    "id": null,
    "text": "query characterSheetCombatOptionsQuery {\n  allCombatOptions {\n    id\n    characterId\n    standard\n    parry\n    improvedParry\n    press\n    defensive\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '475292df0b7f6135af1d240dd6f9796e';
export default node;
