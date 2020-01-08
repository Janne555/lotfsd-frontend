/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetAttributeModifiers = {
    readonly id: string;
    readonly characterId: string;
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
    readonly " $refType": "characterSheetAttributeModifiers";
};
export type characterSheetAttributeModifiers$data = characterSheetAttributeModifiers;
export type characterSheetAttributeModifiers$key = {
    readonly " $data"?: characterSheetAttributeModifiers$data;
    readonly " $fragmentRefs": FragmentRefs<"characterSheetAttributeModifiers">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "characterSheetAttributeModifiers",
  "type": "AttributeModifiers",
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
(node as any).hash = '6a26237f3b0f8585a8db679c9e1b2912';
export default node;
