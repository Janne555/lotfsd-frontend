/* tslint:disable */
/* @relayHash b890904d08f337541fdbfeec6dd18783 */

import { ConcreteRequest } from "relay-runtime";
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
export type characterSheetAddInfoMutationVariables = {
    info: InfoInput;
};
export type characterSheetAddInfoMutationResponse = {
    readonly addInfo: {
        readonly age: number;
        readonly name: string;
        readonly alignment: string;
    } | null;
};
export type characterSheetAddInfoMutation = {
    readonly response: characterSheetAddInfoMutationResponse;
    readonly variables: characterSheetAddInfoMutationVariables;
};



/*
mutation characterSheetAddInfoMutation(
  $info: InfoInput!
) {
  addInfo(info: $info) {
    age
    name
    alignment
  }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "addInfo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "info",
        "variableName": "info"
      }
    ],
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "characterSheetAddInfoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddInfoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddInfoMutation",
    "id": null,
    "text": "mutation characterSheetAddInfoMutation(\n  $info: InfoInput!\n) {\n  addInfo(info: $info) {\n    age\n    name\n    alignment\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '877471a96f3875c87994b6a2f270c626';
export default node;
