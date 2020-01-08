/* tslint:disable */
/* @relayHash bc0b2acb6cb06218e52dc05a4c0cdb77 */

import { ConcreteRequest } from "relay-runtime";
export type CombatOptionsInput = {
    readonly id: string;
    readonly characterId: string;
    readonly standard: boolean;
    readonly parry: boolean;
    readonly improvedParry: boolean;
    readonly press: boolean;
    readonly defensive: boolean;
};
export type characterSheetAddCombatOptionsMutationVariables = {
    combatOptions: CombatOptionsInput;
};
export type characterSheetAddCombatOptionsMutationResponse = {
    readonly addCombatOptions: {
        readonly id: string;
        readonly characterId: string;
        readonly standard: boolean;
        readonly parry: boolean;
        readonly improvedParry: boolean;
        readonly press: boolean;
        readonly defensive: boolean;
    } | null;
};
export type characterSheetAddCombatOptionsMutation = {
    readonly response: characterSheetAddCombatOptionsMutationResponse;
    readonly variables: characterSheetAddCombatOptionsMutationVariables;
};



/*
mutation characterSheetAddCombatOptionsMutation(
  $combatOptions: CombatOptionsInput!
) {
  addCombatOptions(combatOptions: $combatOptions) {
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
    "kind": "LocalArgument",
    "name": "combatOptions",
    "type": "CombatOptionsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addCombatOptions",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "combatOptions",
        "variableName": "combatOptions"
      }
    ],
    "concreteType": "CombatOptions",
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
    "name": "characterSheetAddCombatOptionsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddCombatOptionsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddCombatOptionsMutation",
    "id": null,
    "text": "mutation characterSheetAddCombatOptionsMutation(\n  $combatOptions: CombatOptionsInput!\n) {\n  addCombatOptions(combatOptions: $combatOptions) {\n    id\n    characterId\n    standard\n    parry\n    improvedParry\n    press\n    defensive\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '08820f1d16444704e54763a2cbc2ea69';
export default node;
