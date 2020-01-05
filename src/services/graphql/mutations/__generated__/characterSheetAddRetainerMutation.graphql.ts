/* tslint:disable */
/* @relayHash 6c8b59d73cd45a3a57b4d068c5600eaf */

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
export type characterSheetAddRetainerMutationVariables = {
    retainer: RetainerInput;
};
export type characterSheetAddRetainerMutationResponse = {
    readonly addRetainer: {
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
export type characterSheetAddRetainerMutation = {
    readonly response: characterSheetAddRetainerMutationResponse;
    readonly variables: characterSheetAddRetainerMutationVariables;
};



/*
mutation characterSheetAddRetainerMutation(
  $retainer: RetainerInput!
) {
  addRetainer(retainer: $retainer) {
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
    "name": "addRetainer",
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
    "name": "characterSheetAddRetainerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddRetainerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddRetainerMutation",
    "id": null,
    "text": "mutation characterSheetAddRetainerMutation(\n  $retainer: RetainerInput!\n) {\n  addRetainer(retainer: $retainer) {\n    id\n    characterId\n    name\n    position\n    class\n    level\n    hitpoints\n    wage\n    share\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0f6dc4652d20c36d20444a207518617a';
export default node;
