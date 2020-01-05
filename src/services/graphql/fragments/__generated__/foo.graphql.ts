/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type foo = {
    readonly age: number;
    readonly name: string;
    readonly alignment: string;
    readonly " $refType": "foo";
};
export type foo$data = foo;
export type foo$key = {
    readonly " $data"?: foo$data;
    readonly " $fragmentRefs": FragmentRefs<"foo">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "foo",
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
(node as any).hash = '664b77fc690a5ff06590fc4045f538a9';
export default node;
