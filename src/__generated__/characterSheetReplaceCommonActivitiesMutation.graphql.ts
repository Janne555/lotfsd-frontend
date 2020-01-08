/* tslint:disable */
/* @relayHash 516c674d4125e9c56af5b341e507ce94 */

import { ConcreteRequest } from "relay-runtime";
export type CommonActivitiesInput = {
    readonly id: string;
    readonly characterId: string;
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
};
export type characterSheetReplaceCommonActivitiesMutationVariables = {
    commonActivities: CommonActivitiesInput;
};
export type characterSheetReplaceCommonActivitiesMutationResponse = {
    readonly replaceCommonActivities: {
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
    } | null;
};
export type characterSheetReplaceCommonActivitiesMutation = {
    readonly response: characterSheetReplaceCommonActivitiesMutationResponse;
    readonly variables: characterSheetReplaceCommonActivitiesMutationVariables;
};



/*
mutation characterSheetReplaceCommonActivitiesMutation(
  $commonActivities: CommonActivitiesInput!
) {
  replaceCommonActivities(commonActivities: $commonActivities) {
    id
    architecture
    bushcraft
    climbing
    languages
    openDoors
    search
    sleightOfHand
    sneakAttack
    stealth
    tinkering
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "commonActivities",
    "type": "CommonActivitiesInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "replaceCommonActivities",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "commonActivities",
        "variableName": "commonActivities"
      }
    ],
    "concreteType": "CommonActivities",
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "characterSheetReplaceCommonActivitiesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceCommonActivitiesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceCommonActivitiesMutation",
    "id": null,
    "text": "mutation characterSheetReplaceCommonActivitiesMutation(\n  $commonActivities: CommonActivitiesInput!\n) {\n  replaceCommonActivities(commonActivities: $commonActivities) {\n    id\n    architecture\n    bushcraft\n    climbing\n    languages\n    openDoors\n    search\n    sleightOfHand\n    sneakAttack\n    stealth\n    tinkering\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b5dafec5a543f63e0b44b64442f43e56';
export default node;
