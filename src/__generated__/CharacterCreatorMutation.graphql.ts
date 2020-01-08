/* tslint:disable */
/* @relayHash 68958e1b66b6e8b1806094baa9556317 */

import { ConcreteRequest } from "relay-runtime";
export type AttributesInput = {
    readonly characterId: string;
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
};
export type CombatOptionsInput = {
    readonly characterId: string;
    readonly standard: boolean;
    readonly parry: boolean;
    readonly improvedParry: boolean;
    readonly press: boolean;
    readonly defensive: boolean;
};
export type CommonActivitiesInput = {
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
export type SavingThrowsInput = {
    readonly characterId: string;
    readonly paralyze: number;
    readonly poison: number;
    readonly breathWeapon: number;
    readonly magicalDevice: number;
    readonly magic: number;
};
export type WalletInput = {
    readonly characterId: string;
    readonly copper: number;
    readonly silver: number;
    readonly gold: number;
};
export type InfoInput = {
    readonly characterId: string;
    readonly name: string;
    readonly experience: number;
    readonly class: string;
    readonly race: string;
    readonly age: number;
    readonly gender: string;
    readonly alignment: string;
    readonly player: string;
    readonly attackBonus: number;
    readonly currentHp: number;
    readonly maxHp: number;
    readonly surpriseChance: number;
};
export type CharacterCreatorMutationVariables = {
    attributes: AttributesInput;
    combatOptions: CombatOptionsInput;
    commonActivities: CommonActivitiesInput;
    savingThrows: SavingThrowsInput;
    wallet: WalletInput;
    info: InfoInput;
};
export type CharacterCreatorMutationResponse = {
    readonly addAttributes: {
        readonly id: string;
    } | null;
    readonly addCombatOptions: {
        readonly id: string;
    } | null;
    readonly addCommonActivities: {
        readonly id: string;
    } | null;
    readonly addSavingThrows: {
        readonly id: string;
    } | null;
    readonly addWallet: {
        readonly id: string;
    } | null;
    readonly addInfo: {
        readonly id: string;
    } | null;
};
export type CharacterCreatorMutation = {
    readonly response: CharacterCreatorMutationResponse;
    readonly variables: CharacterCreatorMutationVariables;
};



/*
mutation CharacterCreatorMutation(
  $attributes: AttributesInput!
  $combatOptions: CombatOptionsInput!
  $commonActivities: CommonActivitiesInput!
  $savingThrows: SavingThrowsInput!
  $wallet: WalletInput!
  $info: InfoInput!
) {
  addAttributes(attributes: $attributes) {
    id
  }
  addCombatOptions(combatOptions: $combatOptions) {
    id
  }
  addCommonActivities(commonActivities: $commonActivities) {
    id
  }
  addSavingThrows(savingThrows: $savingThrows) {
    id
  }
  addWallet(wallet: $wallet) {
    id
  }
  addInfo(info: $info) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "attributes",
    "type": "AttributesInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "combatOptions",
    "type": "CombatOptionsInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "commonActivities",
    "type": "CommonActivitiesInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "savingThrows",
    "type": "SavingThrowsInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "wallet",
    "type": "WalletInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "info",
    "type": "InfoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addAttributes",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "attributes",
        "variableName": "attributes"
      }
    ],
    "concreteType": "Attributes",
    "plural": false,
    "selections": (v1/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addCombatOptions",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "combatOptions",
        "variableName": "combatOptions"
      }
    ],
    "concreteType": "CombatOptions",
    "plural": false,
    "selections": (v1/*: any*/)
  },
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
    "selections": (v1/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addSavingThrows",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "savingThrows",
        "variableName": "savingThrows"
      }
    ],
    "concreteType": "SavingThrows",
    "plural": false,
    "selections": (v1/*: any*/)
  },
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
    "selections": (v1/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addInfo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "info",
        "variableName": "info"
      }
    ],
    "concreteType": "Info",
    "plural": false,
    "selections": (v1/*: any*/)
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CharacterCreatorMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterCreatorMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CharacterCreatorMutation",
    "id": null,
    "text": "mutation CharacterCreatorMutation(\n  $attributes: AttributesInput!\n  $combatOptions: CombatOptionsInput!\n  $commonActivities: CommonActivitiesInput!\n  $savingThrows: SavingThrowsInput!\n  $wallet: WalletInput!\n  $info: InfoInput!\n) {\n  addAttributes(attributes: $attributes) {\n    id\n  }\n  addCombatOptions(combatOptions: $combatOptions) {\n    id\n  }\n  addCommonActivities(commonActivities: $commonActivities) {\n    id\n  }\n  addSavingThrows(savingThrows: $savingThrows) {\n    id\n  }\n  addWallet(wallet: $wallet) {\n    id\n  }\n  addInfo(info: $info) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6c9f4b0193db7ebf0c8a56030e705788';
export default node;
