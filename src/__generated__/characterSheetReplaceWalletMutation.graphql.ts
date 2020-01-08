/* tslint:disable */
/* @relayHash 6e58d8b77eca63a65dbaeb87b85882ac */

import { ConcreteRequest } from "relay-runtime";
export type WalletInput = {
    readonly characterId: string;
    readonly copper: number;
    readonly silver: number;
    readonly gold: number;
};
export type characterSheetReplaceWalletMutationVariables = {
    wallet: WalletInput;
};
export type characterSheetReplaceWalletMutationResponse = {
    readonly replaceWallet: {
        readonly id: string;
        readonly characterId: string;
        readonly copper: number;
        readonly gold: number;
        readonly silver: number;
    } | null;
};
export type characterSheetReplaceWalletMutation = {
    readonly response: characterSheetReplaceWalletMutationResponse;
    readonly variables: characterSheetReplaceWalletMutationVariables;
};



/*
mutation characterSheetReplaceWalletMutation(
  $wallet: WalletInput!
) {
  replaceWallet(wallet: $wallet) {
    id
    characterId
    copper
    gold
    silver
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "wallet",
    "type": "WalletInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "replaceWallet",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "wallet",
        "variableName": "wallet"
      }
    ],
    "concreteType": "Wallet",
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
        "name": "copper",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "gold",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "silver",
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
    "name": "characterSheetReplaceWalletMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetReplaceWalletMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetReplaceWalletMutation",
    "id": null,
    "text": "mutation characterSheetReplaceWalletMutation(\n  $wallet: WalletInput!\n) {\n  replaceWallet(wallet: $wallet) {\n    id\n    characterId\n    copper\n    gold\n    silver\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e435830ce8106b000cf5a5b9f4de582e';
export default node;
