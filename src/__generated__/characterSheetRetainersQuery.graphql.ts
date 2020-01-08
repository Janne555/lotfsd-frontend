/* tslint:disable */
/* @relayHash b3ff7a99d8b0373ca6513dcfb6ea3275 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetRetainersQueryVariables = {};
export type characterSheetRetainersQueryResponse = {
    readonly retainers: ReadonlyArray<{
        readonly id: string;
        readonly characterId: string;
        readonly name: string;
        readonly position: string;
        readonly class: string;
        readonly level: number;
        readonly hitpoints: number;
        readonly wage: number;
        readonly share: number;
    } | null> | null;
};
export type characterSheetRetainersQuery = {
    readonly response: characterSheetRetainersQueryResponse;
    readonly variables: characterSheetRetainersQueryVariables;
};



/*
query characterSheetRetainersQuery {
  retainers {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "retainers",
    "storageKey": null,
    "args": null,
    "concreteType": "Retainer",
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
    "name": "characterSheetRetainersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetRetainersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetRetainersQuery",
    "id": null,
    "text": "query characterSheetRetainersQuery {\n  retainers {\n    id\n    characterId\n    name\n    position\n    class\n    level\n    hitpoints\n    wage\n    share\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a9031dcb806f70851ae522fb1c3956e3';
export default node;
