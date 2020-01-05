/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetSavingThrows = {
    readonly id: string;
    readonly characterId: string;
    readonly paralyze: number;
    readonly poison: number;
    readonly breathWeapon: number;
    readonly magicalDevice: number;
    readonly magic: number;
    readonly " $refType": "characterSheetSavingThrows";
};
export type characterSheetSavingThrows$data = characterSheetSavingThrows;
export type characterSheetSavingThrows$key = {
    readonly " $data"?: characterSheetSavingThrows$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetSavingThrows">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetSavingThrows",
  "type": "SavingThrows",
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
      "name": "paralyze",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "poison",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "breathWeapon",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "magicalDevice",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "magic",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '5fbcdad81a257454501161a4ded431c7';
export default node;
