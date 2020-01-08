/* tslint:disable */
/* @relayHash 8d2cf7b54a8500ff2ca3f2431f04223e */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetCommonActivitiesQueryVariables = {
    id: string;
};
export type characterSheetCommonActivitiesQueryResponse = {
    readonly commonActivities: {
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
export type characterSheetCommonActivitiesQuery = {
    readonly response: characterSheetCommonActivitiesQueryResponse;
    readonly variables: characterSheetCommonActivitiesQueryVariables;
};



/*
query characterSheetCommonActivitiesQuery(
  $id: String!
) {
  commonActivities(id: $id) {
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
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "commonActivities",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
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
    "name": "characterSheetCommonActivitiesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetCommonActivitiesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetCommonActivitiesQuery",
    "id": null,
    "text": "query characterSheetCommonActivitiesQuery(\n  $id: String!\n) {\n  commonActivities(id: $id) {\n    id\n    architecture\n    bushcraft\n    climbing\n    languages\n    openDoors\n    search\n    sleightOfHand\n    sneakAttack\n    stealth\n    tinkering\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7e1251960483da08ef5135fd4342dc26';
export default node;
