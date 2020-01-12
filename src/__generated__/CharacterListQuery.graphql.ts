/* tslint:disable */
/* @relayHash ec5446f91c6b65e0f388d88d781ef1c6 */

import { ConcreteRequest } from "relay-runtime";
export type CharacterListQueryVariables = {};
export type CharacterListQueryResponse = {
    readonly characterSheets: ReadonlyArray<{
        readonly name: string;
        readonly class: string;
    } | null> | null;
};
export type CharacterListQuery = {
    readonly response: CharacterListQueryResponse;
    readonly variables: CharacterListQueryVariables;
};



/*
query CharacterListQuery {
  characterSheets {
    name
    class
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "characterSheets",
    "storageKey": null,
    "args": null,
    "concreteType": "CharacterSheet",
    "plural": true,
    "selections": [
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
        "name": "class",
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
    "name": "CharacterListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterListQuery",
    "id": null,
    "text": "query CharacterListQuery {\n  characterSheets {\n    name\n    class\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f9010c740090c80d875b4a3449d8867e';
export default node;
