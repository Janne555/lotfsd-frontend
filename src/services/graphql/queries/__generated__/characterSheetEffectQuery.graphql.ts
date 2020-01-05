/* tslint:disable */
/* @relayHash 2889426763e52f1041df56649f4be593 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetEffectQueryVariables = {};
export type characterSheetEffectQueryResponse = {
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
export type characterSheetEffectQuery = {
    readonly response: characterSheetEffectQueryResponse;
    readonly variables: characterSheetEffectQueryVariables;
};



/*
query characterSheetEffectQuery {
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
    "name": "characterSheetEffectQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetEffectQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetEffectQuery",
    "id": null,
    "text": "query characterSheetEffectQuery {\n  allCombatOptions {\n    id\n    characterId\n    standard\n    parry\n    improvedParry\n    press\n    defensive\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b27aea8371989434b6c7cda68c98a752';
export default node;
