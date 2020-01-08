/* tslint:disable */
/* @relayHash d286361bc7bd7e34f6faf2cd9638248d */

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
    id
    characterId
    name
    experience
    class
    race
    age
    gender
    alignment
    player
    attackBonus
    currentHp
    maxHp
    surpriseChance
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "experience",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "class",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "race",
        "args": null,
        "storageKey": null
      },
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
        "name": "gender",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "alignment",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "player",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "attackBonus",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "currentHp",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "maxHp",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "surpriseChance",
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
    "text": "mutation characterSheetAddInfoMutation(\n  $info: InfoInput!\n) {\n  addInfo(info: $info) {\n    id\n    characterId\n    name\n    experience\n    class\n    race\n    age\n    gender\n    alignment\n    player\n    attackBonus\n    currentHp\n    maxHp\n    surpriseChance\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '877471a96f3875c87994b6a2f270c626';
export default node;
