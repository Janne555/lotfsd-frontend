/* tslint:disable */
/* @relayHash b48b55c9298d188b5d0c413158484c57 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetEffectQueryVariables = {
    id: string;
};
export type characterSheetEffectQueryResponse = {
    readonly effect: {
        readonly id: string;
        readonly characterId: string;
        readonly method: string;
        readonly target: string;
        readonly type: string;
        readonly value: number;
    } | null;
};
export type characterSheetEffectQuery = {
    readonly response: characterSheetEffectQueryResponse;
    readonly variables: characterSheetEffectQueryVariables;
};



/*
query characterSheetEffectQuery(
  $id: String!
) {
  effect(id: $id) {
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
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "effect",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
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
    "name": "characterSheetEffectQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetEffectQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetEffectQuery",
    "id": null,
    "text": "query characterSheetEffectQuery(\n  $id: String!\n) {\n  effect(id: $id) {\n    id\n    characterId\n    method\n    target\n    type\n    value\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6b5ab28b0886aa9119a21e0c3a3c0254';
export default node;
