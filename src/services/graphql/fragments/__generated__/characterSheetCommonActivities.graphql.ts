/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetCommonActivities = {
    readonly id: string;
    readonly architecture: number;
    readonly bushcraft: number;
    readonly climbing: number;
    readonly languages: number;
    readonly openDoors: number;
    readonly search: number;
    readonly sleightOfHand: number;
    readonly sneakAttack: number;
    readonly stealth: number;
    readonly tinkering: number;
    readonly " $refType": "characterSheetCommonActivities";
};
export type characterSheetCommonActivities$data = characterSheetCommonActivities;
export type characterSheetCommonActivities$key = {
    readonly " $data"?: characterSheetCommonActivities$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetCommonActivities">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetCommonActivities",
  "type": "CommonActivities",
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
      "name": "architecture",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bushcraft",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "climbing",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "languages",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "openDoors",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "search",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sleightOfHand",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sneakAttack",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "stealth",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tinkering",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '5c682c1f245250a8e06c69f2d763510d';
export default node;
