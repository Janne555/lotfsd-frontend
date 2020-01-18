/* tslint:disable */
/* @relayHash 5c9f7e4df909f24353fe94e1a4ba1400 */

import { ConcreteRequest } from "relay-runtime";
export type CharacterSheetInput = {
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
    readonly charisma: number;
    readonly constitution: number;
    readonly dexterity: number;
    readonly intelligence: number;
    readonly strength: number;
    readonly wisdom: number;
    readonly paralyze: number;
    readonly poison: number;
    readonly breathWeapon: number;
    readonly magicalDevice: number;
    readonly magic: number;
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
    readonly copper: number;
    readonly silver: number;
    readonly gold: number;
    readonly standard: boolean;
    readonly parry: boolean;
    readonly improvedParry: boolean;
    readonly press: boolean;
    readonly defensive: boolean;
    readonly effects?: ReadonlyArray<EffectInput | null> | null;
    readonly retainers?: ReadonlyArray<RetainerInput | null> | null;
    readonly properties?: ReadonlyArray<PropertyInput | null> | null;
};
export type EffectInput = {
    readonly type: string;
    readonly target: string;
    readonly method: string;
    readonly value: number;
};
export type RetainerInput = {
    readonly name: string;
    readonly position: string;
    readonly class: string;
    readonly level: number;
    readonly hitpoints: number;
    readonly wage: number;
    readonly share: number;
};
export type PropertyInput = {
    readonly id: string;
    readonly name: string;
    readonly value: number;
    readonly rent: number;
    readonly location: string;
    readonly description: string;
    readonly inventory?: ReadonlyArray<ItemInstanceInput | null> | null;
};
export type ItemInstanceInput = {
    readonly id: string;
    readonly equipped: boolean;
};
export type CharacterCreatorMutationVariables = {
    characterSheet: CharacterSheetInput;
};
export type CharacterCreatorMutationResponse = {
    readonly createCharacterSheet: ReadonlyArray<{
        readonly id: string;
    }> | null;
};
export type CharacterCreatorMutation = {
    readonly response: CharacterCreatorMutationResponse;
    readonly variables: CharacterCreatorMutationVariables;
};



/*
mutation CharacterCreatorMutation(
  $characterSheet: CharacterSheetInput!
) {
  createCharacterSheet(characterSheet: $characterSheet) {
    id
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
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "CharacterCreatorMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterCreatorMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CharacterCreatorMutation",
    "id": null,
    "text": "mutation CharacterCreatorMutation(\n  $characterSheet: CharacterSheetInput!\n) {\n  createCharacterSheet(characterSheet: $characterSheet) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8e0cb47bb99fda9efcbde73e46d659a7';
export default node;
