/* tslint:disable */
/* @relayHash aaa5505a1bf825aa654f29033c778471 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InfoInput = {
    readonly id: string;
    readonly characterId: string;
    readonly name: string;
    readonly experience: number;
    readonly class: string;
    readonly race: string;
    readonly age: number;
    readonly gender: string;
    readonly alignment: string;
    readonly player: string;
    readonly attackBonus: number;
    readonly currentHp: number;
    readonly maxHp: number;
    readonly surpriseChance: number;
};
export type addInfoMutationVariables = {
    info: InfoInput;
};
export type addInfoMutationResponse = {
    readonly addInfo: {
        readonly " $fragmentRefs": FragmentRefs<"foo">;
    } | null;
};
export type addInfoMutation = {
    readonly response: addInfoMutationResponse;
    readonly variables: addInfoMutationVariables;
};



/*
mutation addInfoMutation(
  $info: InfoInput!
) {
  addInfo(info: $info) {
    ...foo
  }
}

fragment foo on Info {
  age
  name
  alignment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "info",
    "type": "InfoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "info",
    "variableName": "info"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "addInfoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addInfo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Info",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "foo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addInfoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addInfo",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "addInfoMutation",
    "id": null,
    "text": "mutation addInfoMutation(\n  $info: InfoInput!\n) {\n  addInfo(info: $info) {\n    ...foo\n  }\n}\n\nfragment foo on Info {\n  age\n  name\n  alignment\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '01b69b086b5db2f734b6abaa4416692a';
export default node;
