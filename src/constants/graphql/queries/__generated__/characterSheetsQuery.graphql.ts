/* tslint:disable */
/* @relayHash 2f7bdae96fc8f1be9609267c27b4e767 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetsQueryVariables = {};
export type characterSheetsQueryResponse = {
    readonly characterSheets: ReadonlyArray<{
        readonly id: string | null;
        readonly attributeModifiers: {
            readonly charisma: number;
        } | null;
    } | null> | null;
};
export type characterSheetsQuery = {
    readonly response: characterSheetsQueryResponse;
    readonly variables: characterSheetsQueryVariables;
};



/*
query characterSheetsQuery {
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
    "name": "characterSheetsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetsQuery",
    "id": null,
    "text": "query characterSheetsQuery {\n  characterSheets {\n    id\n    attributeModifiers {\n      charisma\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2be9283ea6bcc51e4a482ad49c6b2550';
export default node;
