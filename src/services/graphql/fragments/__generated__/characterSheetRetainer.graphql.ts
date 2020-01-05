/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetRetainer = {
    readonly id: string;
    readonly characterId: string;
    readonly name: string;
    readonly position: string;
    readonly class: string;
    readonly level: number;
    readonly hitpoints: number;
    readonly wage: number;
    readonly share: number;
    readonly " $refType": "characterSheetRetainer";
};
export type characterSheetRetainer$data = characterSheetRetainer;
export type characterSheetRetainer$key = {
    readonly " $data"?: characterSheetRetainer$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetRetainer">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetRetainer",
  "type": "Retainer",
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
      "name": "position",
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
      "name": "level",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hitpoints",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "wage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "share",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '8a66a435691eab355a63eb835cc13dbe';
export default node;
