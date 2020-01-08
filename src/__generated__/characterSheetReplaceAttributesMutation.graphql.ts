/* tslint:disable */
/* @relayHash 589cb3554086db5570d36817ab479fd7 */

import { ConcreteRequest } from "relay-runtime";
export type AttributesInput = {
    readonly characterId: string;
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
};
export type characterSheetReplaceAttributesMutationVariables = {
    attributes: AttributesInput;
};
export type characterSheetReplaceAttributesMutationResponse = {
    readonly replaceAttributes: {
        readonly id: string;
        readonly characterId: string;
        readonly charisma: number;
        readonly constitution: number;
        readonly dexterity: number;
        readonly intelligence: number;
        readonly strength: number;
        readonly wisdom: number;
    } | null;
};
export type characterSheetReplaceAttributesMutation = {
    readonly response: characterSheetReplaceAttributesMutationResponse;
    readonly variables: characterSheetReplaceAttributesMutationVariables;
};



/*
mutation characterSheetReplaceAttributesMutation(
  $attributes: AttributesInput!
) {
  replaceAttributes(attributes: $attributes) {
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
    "kind": "LocalArgument",
    "name": "attributes",
    "type": "AttributesInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "replaceAttributes",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "attributes",
        "variableName": "attributes"
      }
    ],
    "concreteType": "Attributes",
    "plural": false,
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
    "name": "characterSheetReplaceAttributesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceAttributesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceAttributesMutation",
    "id": null,
    "text": "mutation characterSheetReplaceAttributesMutation(\n  $attributes: AttributesInput!\n) {\n  replaceAttributes(attributes: $attributes) {\n    id\n    characterId\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e4a3400b8c6fdeddf2231c0a736853c4';
export default node;
