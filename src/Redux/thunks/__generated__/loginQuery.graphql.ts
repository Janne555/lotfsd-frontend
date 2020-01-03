/* tslint:disable */
/* @relayHash eaa07bce6d3e3dfd547e12ffbaaae89c */

import { ConcreteRequest } from "relay-runtime";
export type loginQueryVariables = {};
export type loginQueryResponse = {
    readonly characterSheets: ReadonlyArray<{
        readonly id: string | null;
        readonly attributeModifiers: {
            readonly charisma: number;
        } | null;
    } | null> | null;
};
export type loginQuery = {
    readonly response: loginQueryResponse;
    readonly variables: loginQueryVariables;
};



/*
query loginQuery {
  characterSheets {
    id
    attributeModifiers {
      charisma
    }
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
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "attributeModifiers",
        "storageKey": null,
        "args": null,
        "concreteType": "AttributeModifiers",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "charisma",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "loginQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "loginQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "loginQuery",
    "id": null,
    "text": "query loginQuery {\n  characterSheets {\n    id\n    attributeModifiers {\n      charisma\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4adf777922b774ad64b8ba64b7f5843a';
export default node;
