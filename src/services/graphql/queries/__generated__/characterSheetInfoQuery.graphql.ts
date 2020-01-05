/* tslint:disable */
/* @relayHash 3d45fb199b6d880a99cbb022eea336db */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetInfoQueryVariables = {};
export type characterSheetInfoQueryResponse = {
    readonly infos: ReadonlyArray<{
        readonly age: number;
        readonly name: string;
        readonly alignment: string;
    } | null> | null;
};
export type characterSheetInfoQuery = {
    readonly response: characterSheetInfoQueryResponse;
    readonly variables: characterSheetInfoQueryVariables;
};



/*
query characterSheetInfoQuery {
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
    "name": "characterSheetInfoQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetInfoQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetInfoQuery",
    "id": null,
    "text": "query characterSheetInfoQuery {\n  infos {\n    age\n    name\n    alignment\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9df2bbb591a91303cdea3606b3cf93bc';
export default node;
