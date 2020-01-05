/* tslint:disable */
/* @relayHash de8c20dbed619d737fb353f9f29f8aab */

import { ConcreteRequest } from "relay-runtime";
export type infoQueryVariables = {};
export type infoQueryResponse = {
    readonly infos: ReadonlyArray<{
        readonly age: number;
        readonly name: string;
        readonly alignment: string;
    } | null> | null;
};
export type infoQuery = {
    readonly response: infoQueryResponse;
    readonly variables: infoQueryVariables;
};



/*
query infoQuery {
  infos {
    age
    name
    alignment
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "infos",
    "storageKey": null,
    "args": null,
    "concreteType": "Info",
    "plural": true,
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
    "name": "infoQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "infoQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "infoQuery",
    "id": null,
    "text": "query infoQuery {\n  infos {\n    age\n    name\n    alignment\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ad83d4a1306aee559bc089a0c25e5106';
export default node;
