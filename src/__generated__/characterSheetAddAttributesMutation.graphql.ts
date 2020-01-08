/* tslint:disable */
/* @relayHash 4a892c8812f84872e0832c54dc53a37a */

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
export type characterSheetAddAttributesMutationVariables = {
    attributes: AttributesInput;
};
export type characterSheetAddAttributesMutationResponse = {
    readonly addAttributes: {
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
export type characterSheetAddAttributesMutation = {
    readonly response: characterSheetAddAttributesMutationResponse;
    readonly variables: characterSheetAddAttributesMutationVariables;
};



/*
mutation characterSheetAddAttributesMutation(
  $attributes: AttributesInput!
) {
  addAttributes(attributes: $attributes) {
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
    "name": "addAttributes",
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
    "name": "characterSheetAddAttributesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddAttributesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddAttributesMutation",
    "id": null,
    "text": "mutation characterSheetAddAttributesMutation(\n  $attributes: AttributesInput!\n) {\n  addAttributes(attributes: $attributes) {\n    id\n    characterId\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3a8423d206a28e7f532949fd777744f0';
export default node;
