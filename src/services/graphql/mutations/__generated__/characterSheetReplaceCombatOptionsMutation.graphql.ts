/* tslint:disable */
/* @relayHash 03858cc802bcc9e7149c924d63580d9e */

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
export type characterSheetReplaceCombatOptionsMutationVariables = {
    combatOptions: CombatOptionsInput;
};
export type characterSheetReplaceCombatOptionsMutationResponse = {
    readonly replaceCombatOptions: {
        readonly id: string;
        readonly characterId: string;
        readonly standard: boolean;
        readonly parry: boolean;
        readonly improvedParry: boolean;
        readonly press: boolean;
        readonly defensive: boolean;
    } | null;
};
export type characterSheetReplaceCombatOptionsMutation = {
    readonly response: characterSheetReplaceCombatOptionsMutationResponse;
    readonly variables: characterSheetReplaceCombatOptionsMutationVariables;
};



/*
mutation characterSheetReplaceCombatOptionsMutation(
  $combatOptions: CombatOptionsInput!
) {
  replaceCombatOptions(combatOptions: $combatOptions) {
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
    "name": "replaceCombatOptions",
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
    "name": "characterSheetReplaceCombatOptionsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceCombatOptionsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceCombatOptionsMutation",
    "id": null,
    "text": "mutation characterSheetReplaceCombatOptionsMutation(\n  $combatOptions: CombatOptionsInput!\n) {\n  replaceCombatOptions(combatOptions: $combatOptions) {\n    id\n    characterId\n    standard\n    parry\n    improvedParry\n    press\n    defensive\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '39b9f871514a5ba8a3f54157ba27ff06';
export default node;
