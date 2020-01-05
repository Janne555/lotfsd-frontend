/* tslint:disable */
/* @relayHash 68a5a3c696d10a1037bb9cdd650644ed */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetAttributesQueryVariables = {};
export type characterSheetAttributesQueryResponse = {
    readonly allAttributes: ReadonlyArray<{
        readonly id: string;
        readonly characterId: string;
        readonly charisma: number;
        readonly constitution: number;
        readonly dexterity: number;
        readonly intelligence: number;
        readonly strength: number;
        readonly wisdom: number;
    } | null> | null;
};
export type characterSheetAttributesQuery = {
    readonly response: characterSheetAttributesQueryResponse;
    readonly variables: characterSheetAttributesQueryVariables;
};



/*
query characterSheetAttributesQuery {
  allAttributes {
    id
    characterId
    charisma
    constitution
    dexterity
    intelligence
    strength
    wisdom
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allAttributes",
    "storageKey": null,
    "args": null,
    "concreteType": "Attributes",
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
        "name": "charisma",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "constitution",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "dexterity",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "intelligence",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "strength",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "wisdom",
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
    "name": "characterSheetAttributesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAttributesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetAttributesQuery",
    "id": null,
    "text": "query characterSheetAttributesQuery {\n  allAttributes {\n    id\n    characterId\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd48017da5e24068bc197e053b793c46f';
export default node;
