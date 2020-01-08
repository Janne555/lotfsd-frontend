/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetEffect = {
    readonly id: string;
    readonly characterId: string;
    readonly method: string;
    readonly target: string;
    readonly type: string;
    readonly value: number;
    readonly " $refType": "characterSheetEffect";
};
export type characterSheetEffect$data = characterSheetEffect;
export type characterSheetEffect$key = {
    readonly " $data"?: characterSheetEffect$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetEffect">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetEffect",
  "type": "Effect",
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
      "name": "method",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "target",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "value",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ad87e9148dc17e11e04096327d305fe7';
export default node;
