/* tslint:disable */
/* @relayHash e79cfd281927929a68d5082e4544e539 */

import { ConcreteRequest } from "relay-runtime";
export type SavingThrowsInput = {
    readonly characterId: string;
    readonly paralyze: number;
    readonly poison: number;
    readonly breathWeapon: number;
    readonly magicalDevice: number;
    readonly magic: number;
};
export type characterSheetReplaceSavingThrowsMutationVariables = {
    savingThrows: SavingThrowsInput;
};
export type characterSheetReplaceSavingThrowsMutationResponse = {
    readonly replaceSavingThrows: {
        readonly id: string;
        readonly characterId: string;
        readonly paralyze: number;
        readonly poison: number;
        readonly breathWeapon: number;
        readonly magicalDevice: number;
        readonly magic: number;
    } | null;
};
export type characterSheetReplaceSavingThrowsMutation = {
    readonly response: characterSheetReplaceSavingThrowsMutationResponse;
    readonly variables: characterSheetReplaceSavingThrowsMutationVariables;
};



/*
mutation characterSheetReplaceSavingThrowsMutation(
  $savingThrows: SavingThrowsInput!
) {
  replaceSavingThrows(savingThrows: $savingThrows) {
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
    "name": "replaceSavingThrows",
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
    "name": "characterSheetReplaceSavingThrowsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceSavingThrowsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceSavingThrowsMutation",
    "id": null,
    "text": "mutation characterSheetReplaceSavingThrowsMutation(\n  $savingThrows: SavingThrowsInput!\n) {\n  replaceSavingThrows(savingThrows: $savingThrows) {\n    id\n    characterId\n    paralyze\n    poison\n    breathWeapon\n    magicalDevice\n    magic\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '823e2c07e00adc7f76f9fba1023aa2c4';
export default node;
