/* tslint:disable */
/* @relayHash d5cbc6710df3d09ae842ff9245adc10d */

import { ConcreteRequest } from "relay-runtime";
export type SavingThrowsInput = {
    readonly id: string;
    readonly characterId: string;
    readonly paralyze: number;
    readonly poison: number;
    readonly breathWeapon: number;
    readonly magicalDevice: number;
    readonly magic: number;
};
export type characterSheetAddSavingThrowsMutationVariables = {
    savingThrows: SavingThrowsInput;
};
export type characterSheetAddSavingThrowsMutationResponse = {
    readonly addSavingThrows: {
        readonly id: string;
        readonly characterId: string;
        readonly paralyze: number;
        readonly poison: number;
        readonly breathWeapon: number;
        readonly magicalDevice: number;
        readonly magic: number;
    } | null;
};
export type characterSheetAddSavingThrowsMutation = {
    readonly response: characterSheetAddSavingThrowsMutationResponse;
    readonly variables: characterSheetAddSavingThrowsMutationVariables;
};



/*
mutation characterSheetAddSavingThrowsMutation(
  $savingThrows: SavingThrowsInput!
) {
  addSavingThrows(savingThrows: $savingThrows) {
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
    "name": "savingThrows",
    "type": "SavingThrowsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addSavingThrows",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "savingThrows",
        "variableName": "savingThrows"
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
    "name": "characterSheetAddSavingThrowsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddSavingThrowsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddSavingThrowsMutation",
    "id": null,
    "text": "mutation characterSheetAddSavingThrowsMutation(\n  $savingThrows: SavingThrowsInput!\n) {\n  addSavingThrows(savingThrows: $savingThrows) {\n    id\n    characterId\n    paralyze\n    poison\n    breathWeapon\n    magicalDevice\n    magic\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9eea542d4cef9aa64ca199017248aacf';
export default node;
