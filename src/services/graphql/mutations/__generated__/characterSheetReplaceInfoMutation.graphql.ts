/* tslint:disable */
/* @relayHash f9af44a9ea449d01dbf8877fa8eeeed5 */

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
export type characterSheetReplaceInfoMutationVariables = {
    info: InfoInput;
};
export type characterSheetReplaceInfoMutationResponse = {
    readonly replaceInfo: {
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
export type characterSheetReplaceInfoMutation = {
    readonly response: characterSheetReplaceInfoMutationResponse;
    readonly variables: characterSheetReplaceInfoMutationVariables;
};



/*
mutation characterSheetReplaceInfoMutation(
  $info: InfoInput!
) {
  replaceInfo(info: $info) {
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
    "name": "replaceInfo",
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
    "name": "characterSheetReplaceInfoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceInfoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceInfoMutation",
    "id": null,
    "text": "mutation characterSheetReplaceInfoMutation(\n  $info: InfoInput!\n) {\n  replaceInfo(info: $info) {\n    id\n    characterId\n    name\n    experience\n    class\n    race\n    age\n    gender\n    alignment\n    player\n    attackBonus\n    currentHp\n    maxHp\n    surpriseChance\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '43557cacfd36806841e5bd949093e921';
export default node;
