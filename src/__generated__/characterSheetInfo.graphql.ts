/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetInfo = {
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
    readonly " $refType": "characterSheetInfo";
};
export type characterSheetInfo$data = characterSheetInfo;
export type characterSheetInfo$key = {
    readonly " $data"?: characterSheetInfo$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetInfo">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetInfo",
  "type": "Info",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = 'bd03f3620f9316de68d9c8171a69ee18';
export default node;
