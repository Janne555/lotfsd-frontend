/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetAttributes = {
    readonly id: string;
    readonly characterId: string;
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
    readonly " $refType": "characterSheetAttributes";
};
export type characterSheetAttributes$data = characterSheetAttributes;
export type characterSheetAttributes$key = {
    readonly " $data"?: characterSheetAttributes$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetAttributes">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetAttributes",
  "type": "Attributes",
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
      "name": "charisma",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "constitution",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dexterity",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "intelligence",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "strength",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "wisdom",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'beef739c435ab6bd82ac67f526044ffa';
export default node;
