/* tslint:disable */
/* @relayHash bc25ac2cad971b253faa01d6f2720ad6 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetRetainerQueryVariables = {};
export type characterSheetRetainerQueryResponse = {
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
export type characterSheetRetainerQuery = {
    readonly response: characterSheetRetainerQueryResponse;
    readonly variables: characterSheetRetainerQueryVariables;
};



/*
query characterSheetRetainerQuery {
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
    "name": "characterSheetRetainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetRetainerQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetRetainerQuery",
    "id": null,
    "text": "query characterSheetRetainerQuery {\n  retainers {\n    id\n    characterId\n    name\n    position\n    class\n    level\n    hitpoints\n    wage\n    share\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3b9463486f9c0984ff93b4b4da1adf00';
export default node;
