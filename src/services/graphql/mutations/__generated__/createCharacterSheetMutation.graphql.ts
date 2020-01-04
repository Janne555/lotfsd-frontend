/* tslint:disable */
/* @relayHash 200b7bf7165fc58d77a30702f34b4ebf */

import { ConcreteRequest } from "relay-runtime";
export type CharacterSheetInput = {
    readonly id?: string | null;
    readonly name: string;
    readonly experience: number;
    readonly class: string;
    readonly race: string;
    readonly age: number;
    readonly gender: string;
    readonly alignment: string;
    readonly attackBonus: number;
    readonly currentHp: number;
    readonly maxHp: number;
    readonly surpriseChance: number;
    readonly attributes?: AttributesInput | null;
    readonly attributeModifiers?: AttributeModifiersInput | null;
    readonly savingThrows?: SavingThrowsInput | null;
    readonly commonActivities?: CommonActivitiesInput | null;
    readonly wallet?: WalletInput | null;
    readonly effect?: ReadonlyArray<EffectInput | null> | null;
    readonly properties?: ReadonlyArray<PropertyInput | null> | null;
    readonly inventory?: ReadonlyArray<ItemInstanceInput | null> | null;
};
export type AttributesInput = {
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
};
export type AttributeModifiersInput = {
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
};
export type SavingThrowsInput = {
    readonly paralyze: number;
    readonly poison: number;
    readonly breathWeapon: number;
    readonly magicalDevice: number;
    readonly magic: number;
};
export type CommonActivitiesInput = {
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
export type WalletInput = {
    readonly copper: number;
    readonly silver: number;
    readonly gold: number;
};
export type EffectInput = {
    readonly type: string;
    readonly target: string;
    readonly method: string;
    readonly value: number;
};
export type PropertyInput = {
    readonly id: string;
    readonly owner: string;
    readonly name: string;
    readonly value: number;
    readonly rent: number;
    readonly location: string;
    readonly description: string;
    readonly inventory?: ReadonlyArray<ItemInstanceInput | null> | null;
};
export type ItemInstanceInput = {
    readonly itemId: string;
    readonly id: string;
    readonly equipped: boolean;
};
export type createCharacterSheetMutationVariables = {
    characterSheet: CharacterSheetInput;
};
export type createCharacterSheetMutationResponse = {
    readonly createCharacterSheet: {
        readonly id: string | null;
        readonly attributeModifiers: {
            readonly charisma: number;
        } | null;
    } | null;
};
export type createCharacterSheetMutation = {
    readonly response: createCharacterSheetMutationResponse;
    readonly variables: createCharacterSheetMutationVariables;
};



/*
mutation createCharacterSheetMutation(
  $characterSheet: CharacterSheetInput!
) {
  createCharacterSheet(characterSheet: $characterSheet) {
    id
    attributeModifiers {
      charisma
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "characterSheet",
    "type": "CharacterSheetInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCharacterSheet",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "characterSheet",
        "variableName": "characterSheet"
      }
    ],
    "concreteType": "CharacterSheet",
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
        "kind": "LinkedField",
        "alias": null,
        "name": "attributeModifiers",
        "storageKey": null,
        "args": null,
        "concreteType": "AttributeModifiers",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "charisma",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createCharacterSheetMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createCharacterSheetMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createCharacterSheetMutation",
    "id": null,
    "text": "mutation createCharacterSheetMutation(\n  $characterSheet: CharacterSheetInput!\n) {\n  createCharacterSheet(characterSheet: $characterSheet) {\n    id\n    attributeModifiers {\n      charisma\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1a06f98b3e2558d0a70269851219e961';
export default node;
