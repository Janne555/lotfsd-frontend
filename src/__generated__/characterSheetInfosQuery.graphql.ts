/* tslint:disable */
/* @relayHash 6208ba6a041d7e034410966383419b56 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetInfosQueryVariables = {};
export type characterSheetInfosQueryResponse = {
    readonly infos: ReadonlyArray<{
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
    } | null> | null;
};
export type characterSheetInfosQuery = {
    readonly response: characterSheetInfosQueryResponse;
    readonly variables: characterSheetInfosQueryVariables;
};



/*
query characterSheetInfosQuery {
  infos {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "infos",
    "storageKey": null,
    "args": null,
    "concreteType": "Info",
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
    "name": "characterSheetInfosQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetInfosQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetInfosQuery",
    "id": null,
    "text": "query characterSheetInfosQuery {\n  infos {\n    id\n    characterId\n    name\n    experience\n    class\n    race\n    age\n    gender\n    alignment\n    player\n    attackBonus\n    currentHp\n    maxHp\n    surpriseChance\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a070853511aeab4342ea56c6137015bb';
export default node;
