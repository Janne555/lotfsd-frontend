/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetCombatOptions = {
    readonly id: string;
    readonly characterId: string;
    readonly standard: boolean;
    readonly parry: boolean;
    readonly improvedParry: boolean;
    readonly press: boolean;
    readonly defensive: boolean;
    readonly " $refType": "characterSheetCombatOptions";
};
export type characterSheetCombatOptions$data = characterSheetCombatOptions;
export type characterSheetCombatOptions$key = {
    readonly " $data"?: characterSheetCombatOptions$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetCombatOptions">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetCombatOptions",
  "type": "CombatOptions",
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
      "name": "standard",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "parry",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "improvedParry",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "press",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "defensive",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ea8b1cdbd4aedcead138f449f33ea08e';
export default node;
