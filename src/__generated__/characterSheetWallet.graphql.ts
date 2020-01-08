/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetWallet = {
    readonly id: string;
    readonly characterId: string;
    readonly copper: number;
    readonly gold: number;
    readonly silver: number;
    readonly " $refType": "characterSheetWallet";
};
export type characterSheetWallet$data = characterSheetWallet;
export type characterSheetWallet$key = {
    readonly " $data"?: characterSheetWallet$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetWallet">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetWallet",
  "type": "Wallet",
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
      "name": "copper",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "gold",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "silver",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '4b575e5b0f1c14f49e38f4b109b8ec29';
export default node;
