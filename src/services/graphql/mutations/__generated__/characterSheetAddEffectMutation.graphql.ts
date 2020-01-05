/* tslint:disable */
/* @relayHash 5d0191a2906b6058bf178469c2b6401f */

import { ConcreteRequest } from "relay-runtime";
export type EffectInput = {
    readonly id: string;
    readonly characterId: string;
    readonly type: string;
    readonly target: string;
    readonly method: string;
    readonly value: number;
};
export type characterSheetAddEffectMutationVariables = {
    effect: EffectInput;
};
export type characterSheetAddEffectMutationResponse = {
    readonly addEffect: {
        readonly id: string;
        readonly characterId: string;
        readonly method: string;
        readonly target: string;
        readonly type: string;
        readonly value: number;
    } | null;
};
export type characterSheetAddEffectMutation = {
    readonly response: characterSheetAddEffectMutationResponse;
    readonly variables: characterSheetAddEffectMutationVariables;
};



/*
mutation characterSheetAddEffectMutation(
  $effect: EffectInput!
) {
  addEffect(effect: $effect) {
    id
    characterId
    method
    target
    type
    value
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "effect",
    "type": "EffectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addEffect",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "effect",
        "variableName": "effect"
      }
    ],
    "concreteType": "Effect",
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
        "name": "method",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "target",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
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
    "name": "characterSheetAddEffectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddEffectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddEffectMutation",
    "id": null,
    "text": "mutation characterSheetAddEffectMutation(\n  $effect: EffectInput!\n) {\n  addEffect(effect: $effect) {\n    id\n    characterId\n    method\n    target\n    type\n    value\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0b3378a555f0611a4f67d6c6901fe614';
export default node;
