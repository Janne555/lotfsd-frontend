/* tslint:disable */
/* @relayHash f2dbfa608d9e85886455cb12aaaaae68 */

import { ConcreteRequest } from "relay-runtime";
export type info2QueryVariables = {
    id: string;
};
export type info2QueryResponse = {
    readonly info: {
        readonly age: number;
        readonly name: string;
        readonly alignment: string;
    } | null;
};
export type info2Query = {
    readonly response: info2QueryResponse;
    readonly variables: info2QueryVariables;
};



/*
query info2Query(
  $id: String!
) {
  info(id: $id) {
    age
    name
    alignment
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
    "name": "info",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Info",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "age",
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
        "name": "alignment",
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
    "name": "info2Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "info2Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "info2Query",
    "id": null,
    "text": "query info2Query(\n  $id: String!\n) {\n  info(id: $id) {\n    age\n    name\n    alignment\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6c757ca3240be2ece889475cada1ce39';
export default node;
