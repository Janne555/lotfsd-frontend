/* tslint:disable */
/* @relayHash 29df61d2b8feb5a04e8d3ea2cab927e6 */

import { ConcreteRequest } from "relay-runtime";
export type EffectInput = {
    readonly characterId: string;
    readonly type: string;
    readonly target: string;
    readonly method: string;
    readonly value: number;
};
export type characterSheetReplaceEffectMutationVariables = {
    effect: EffectInput;
};
export type characterSheetReplaceEffectMutationResponse = {
    readonly replaceEffect: {
        readonly id: string;
        readonly characterId: string;
        readonly method: string;
        readonly target: string;
        readonly type: string;
        readonly value: number;
    } | null;
};
export type characterSheetReplaceEffectMutation = {
    readonly response: characterSheetReplaceEffectMutationResponse;
    readonly variables: characterSheetReplaceEffectMutationVariables;
};



/*
mutation characterSheetReplaceEffectMutation(
  $effect: EffectInput!
) {
  replaceEffect(effect: $effect) {
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
    "name": "replaceEffect",
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
    "name": "characterSheetReplaceEffectMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceEffectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceEffectMutation",
    "id": null,
    "text": "mutation characterSheetReplaceEffectMutation(\n  $effect: EffectInput!\n) {\n  replaceEffect(effect: $effect) {\n    id\n    characterId\n    method\n    target\n    type\n    value\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c00337a4c620b9c0c70e1f74780738f9';
export default node;
