/* tslint:disable */
/* @relayHash b7d670530d28ef03ccffe4d0fd84adc9 */

import { ConcreteRequest } from "relay-runtime";
export type characterSheetCommonActivitiesQueryVariables = {};
export type characterSheetCommonActivitiesQueryResponse = {
    readonly allCommonActivities: ReadonlyArray<{
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
    } | null> | null;
};
export type characterSheetCommonActivitiesQuery = {
    readonly response: characterSheetCommonActivitiesQueryResponse;
    readonly variables: characterSheetCommonActivitiesQueryVariables;
};



/*
query characterSheetCommonActivitiesQuery {
  allCommonActivities {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "allCommonActivities",
    "storageKey": null,
    "args": null,
    "concreteType": "CommonActivities",
    "plural": true,
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
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetCommonActivitiesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "characterSheetCommonActivitiesQuery",
    "id": null,
    "text": "query characterSheetCommonActivitiesQuery {\n  allCommonActivities {\n    id\n    architecture\n    bushcraft\n    climbing\n    languages\n    openDoors\n    search\n    sleightOfHand\n    sneakAttack\n    stealth\n    tinkering\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '47703d6e66db6fbc732bbf09bd2298b5';
export default node;
