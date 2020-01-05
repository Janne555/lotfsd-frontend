/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type characterSheetInfo = {
    readonly age: number;
    readonly name: string;
    readonly alignment: string;
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
      "name": "age",
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
      "name": "alignment",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '9a41730a7f56b9c18ef1944c923f2652';
export default node;
