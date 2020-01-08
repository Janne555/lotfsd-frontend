/* tslint:disable */
/* @relayHash 14f86eb34900dd2e7ba58c3c0e5fe909 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetRetainerQueryVariables = {
    id: string;
};
export type characterSheetRetainerQueryResponse = {
    readonly retainer: {
        readonly id: string;
        readonly characterId: string;
        readonly name: string;
        readonly position: string;
        readonly class: string;
        readonly level: number;
        readonly hitpoints: number;
        readonly wage: number;
        readonly share: number;
    } | null;
};
export type characterSheetRetainerQuery = {
    readonly response: characterSheetRetainerQueryResponse;
    readonly variables: characterSheetRetainerQueryVariables;
};



/*
query characterSheetRetainerQuery(
  $id: String!
) {
  retainer(id: $id) {
    id
    characterId
    name
    position
    class
    level
    hitpoints
    wage
    share
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
    "name": "retainer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Retainer",
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "position",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "class",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "level",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hitpoints",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "wage",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "share",
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
    "name": "characterSheetRetainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetRetainerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetRetainerQuery",
    "id": null,
    "text": "query characterSheetRetainerQuery(\n  $id: String!\n) {\n  retainer(id: $id) {\n    id\n    characterId\n    name\n    position\n    class\n    level\n    hitpoints\n    wage\n    share\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7e4a6701c958a5ee26fd543ea729c14a';
export default node;
