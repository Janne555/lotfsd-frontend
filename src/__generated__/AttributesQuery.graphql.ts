/* tslint:disable */
/* @relayHash 75fcea2efe28d26da0b5f9378e698819 */

import { ConcreteRequest } from "relay-runtime";
export type AttributesQueryVariables = {
    id: string;
};
export type AttributesQueryResponse = {
    readonly attributes: {
        readonly charisma: number;
        readonly constitution: number;
        readonly dexterity: number;
        readonly intelligence: number;
        readonly strength: number;
        readonly wisdom: number;
    } | null;
    readonly attributeModifiers: {
        readonly charisma: number;
        readonly constitution: number;
        readonly dexterity: number;
        readonly intelligence: number;
        readonly strength: number;
        readonly wisdom: number;
    } | null;
};
export type AttributesQuery = {
    readonly response: AttributesQueryResponse;
    readonly variables: AttributesQueryVariables;
};



/*
query AttributesQuery(
  $id: String!
) {
  attributes(id: $id) {
    charisma
    constitution
    dexterity
    intelligence
    strength
    wisdom
  }
  attributeModifiers(id: $id) {
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = [
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
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "attributes",
    "storageKey": null,
    "args": (v1/*: any*/),
    "concreteType": "Attributes",
    "plural": false,
    "selections": (v2/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "attributeModifiers",
    "storageKey": null,
    "args": (v1/*: any*/),
    "concreteType": "AttributeModifiers",
    "plural": false,
    "selections": (v2/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AttributesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AttributesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AttributesQuery",
    "id": null,
    "text": "query AttributesQuery(\n  $id: String!\n) {\n  attributes(id: $id) {\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n  }\n  attributeModifiers(id: $id) {\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '974120ad4b2027e49c37db38ce6c0218';
export default node;
