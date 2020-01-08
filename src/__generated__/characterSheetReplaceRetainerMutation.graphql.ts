/* tslint:disable */
/* @relayHash 78b0fab749b376caf906908a1cef718c */

import { ConcreteRequest } from "relay-runtime";
export type RetainerInput = {
    readonly id: string;
    readonly characterId: string;
    readonly name: string;
    readonly position: string;
    readonly class: string;
    readonly level: number;
    readonly hitpoints: number;
    readonly wage: number;
    readonly share: number;
};
export type characterSheetReplaceRetainerMutationVariables = {
    retainer: RetainerInput;
};
export type characterSheetReplaceRetainerMutationResponse = {
    readonly replaceRetainer: {
        readonly id: string;
        readonly characterId: string;
        readonly name: string;
        readonly position: string;
        readonly class: string;
        readonly level: number;
        readonly hitpoints: number;
        readonly wage: number;
        readonly share: number;
    } | null;
};
export type characterSheetReplaceRetainerMutation = {
    readonly response: characterSheetReplaceRetainerMutationResponse;
    readonly variables: characterSheetReplaceRetainerMutationVariables;
};



/*
mutation characterSheetReplaceRetainerMutation(
  $retainer: RetainerInput!
) {
  replaceRetainer(retainer: $retainer) {
    id
    characterId
    name
    position
    class
    level
    hitpoints
    wage
    share
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "retainer",
    "type": "RetainerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "replaceRetainer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "retainer",
        "variableName": "retainer"
      }
    ],
    "concreteType": "Retainer",
    "plural": false,
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "characterSheetReplaceRetainerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceRetainerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceRetainerMutation",
    "id": null,
    "text": "mutation characterSheetReplaceRetainerMutation(\n  $retainer: RetainerInput!\n) {\n  replaceRetainer(retainer: $retainer) {\n    id\n    characterId\n    name\n    position\n    class\n    level\n    hitpoints\n    wage\n    share\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ac30f78bce00e4688a9b250142912af8';
export default node;
