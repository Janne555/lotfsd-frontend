/* tslint:disable */
/* @relayHash 194a9c1f661538b615dd631bacdbe3b9 */

import { ConcreteRequest } from "relay-runtime";
export type WalletInput = {
    readonly id: string;
    readonly characterId: string;
    readonly copper: number;
    readonly silver: number;
    readonly gold: number;
};
export type characterSheetAddWalletMutationVariables = {
    wallet: WalletInput;
};
export type characterSheetAddWalletMutationResponse = {
    readonly addWallet: {
        readonly id: string;
        readonly characterId: string;
        readonly copper: number;
        readonly gold: number;
        readonly silver: number;
    } | null;
};
export type characterSheetAddWalletMutation = {
    readonly response: characterSheetAddWalletMutationResponse;
    readonly variables: characterSheetAddWalletMutationVariables;
};



/*
mutation characterSheetAddWalletMutation(
  $wallet: WalletInput!
) {
  addWallet(wallet: $wallet) {
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
    "name": "addWallet",
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
    "name": "characterSheetAddWalletMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "characterSheetAddWalletMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "characterSheetAddWalletMutation",
    "id": null,
    "text": "mutation characterSheetAddWalletMutation(\n  $wallet: WalletInput!\n) {\n  addWallet(wallet: $wallet) {\n    id\n    characterId\n    copper\n    gold\n    silver\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2179cf266f717f4fa8c5b0bf94645aa8';
export default node;
