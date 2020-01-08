/* tslint:disable */
/* @relayHash c4f2da81fc58bc05c5cda9857c4ab132 */

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
export type characterSheetAddCommonActivitiesMutationVariables = {
    commonActivities: CommonActivitiesInput;
};
export type characterSheetAddCommonActivitiesMutationResponse = {
    readonly addCommonActivities: {
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
export type characterSheetAddCommonActivitiesMutation = {
    readonly response: characterSheetAddCommonActivitiesMutationResponse;
    readonly variables: characterSheetAddCommonActivitiesMutationVariables;
};



/*
mutation characterSheetAddCommonActivitiesMutation(
  $commonActivities: CommonActivitiesInput!
) {
  addCommonActivities(commonActivities: $commonActivities) {
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
    "name": "addCommonActivities",
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
    "name": "characterSheetAddCommonActivitiesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddCommonActivitiesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddCommonActivitiesMutation",
    "id": null,
    "text": "mutation characterSheetAddCommonActivitiesMutation(\n  $commonActivities: CommonActivitiesInput!\n) {\n  addCommonActivities(commonActivities: $commonActivities) {\n    id\n    architecture\n    bushcraft\n    climbing\n    languages\n    openDoors\n    search\n    sleightOfHand\n    sneakAttack\n    stealth\n    tinkering\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '59e78b0982b21807053d8058b8b7ed16';
export default node;
