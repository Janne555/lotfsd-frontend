/* tslint:disable */
/* @relayHash a0fbc2095027aa0c7bbea3f74a6e7859 */

import { ConcreteRequest } from "relay-runtime";
export type CharacterSheetQueryVariables = {
    id: string;
};
export type CharacterSheetQueryResponse = {
    readonly characterSheet: {
        readonly charisma: number;
        readonly constitution: number;
        readonly dexterity: number;
        readonly intelligence: number;
        readonly strength: number;
        readonly wisdom: number;
    } | null;
};
export type CharacterSheetQuery = {
    readonly response: CharacterSheetQueryResponse;
    readonly variables: CharacterSheetQueryVariables;
};



/*
query CharacterSheetQuery(
  $id: String!
) {
  characterSheet(id: $id) {
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
    "name": "CharacterSheetQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterSheetQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterSheetQuery",
    "id": null,
    "text": "query CharacterSheetQuery(\n  $id: String!\n) {\n  characterSheet(id: $id) {\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f19b46ec275a97015d43721ca3d489d4';
export default node;
