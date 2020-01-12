/* tslint:disable */
/* @relayHash afbd5bf21c46016c9da65609c47b238b */

import { ConcreteRequest } from "relay-runtime";
export type CharacterQueryVariables = {
    id: string;
};
export type CharacterQueryResponse = {
    readonly characterSheet: {
        readonly name: string;
    } | null;
};
export type CharacterQuery = {
    readonly response: CharacterQueryResponse;
    readonly variables: CharacterQueryVariables;
};



/*
query CharacterQuery(
  $id: String!
) {
  characterSheet(id: $id) {
    name
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
    "name": "characterSheet",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "CharacterSheet",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
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
    "name": "CharacterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterQuery",
    "id": null,
    "text": "query CharacterQuery(\n  $id: String!\n) {\n  characterSheet(id: $id) {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f5fd74755f9cc67f164f20444026df46';
export default node;
