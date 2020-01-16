/* tslint:disable */
/* @relayHash a5ea95ed2790dc4f2a46184d139a23fd */

import { ConcreteRequest } from "relay-runtime";
export type CharacterSheetQueryVariables = {
    id: string;
};
export type CharacterSheetQueryResponse = {
    readonly characterSheet: {
        readonly id: string;
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
        readonly paralyze: number;
        readonly poison: number;
        readonly breathWeapon: number;
        readonly magicalDevice: number;
        readonly magic: number;
        readonly charisma: number;
        readonly constitution: number;
        readonly dexterity: number;
        readonly intelligence: number;
        readonly strength: number;
        readonly wisdom: number;
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
        readonly effects: ReadonlyArray<{
            readonly id: string;
            readonly method: string;
            readonly target: string;
            readonly type: string;
            readonly value: number;
        } | null> | null;
        readonly retainers: ReadonlyArray<{
            readonly class: string;
            readonly hitpoints: number;
            readonly id: string;
            readonly level: number;
            readonly name: string;
            readonly position: string;
            readonly share: number;
            readonly wage: number;
        } | null> | null;
        readonly properties: ReadonlyArray<{
            readonly description: string;
            readonly id: string;
            readonly location: string;
            readonly name: string;
            readonly rent: number;
            readonly value: number;
        } | null> | null;
    } | null;
};
export type CharacterSheetQuery = {
    readonly response: CharacterSheetQueryResponse;
    readonly variables: CharacterSheetQueryVariables;
};



/*
query CharacterSheetQuery(
  $id: String!
) {
  characterSheet(id: $id) {
    id
    name
    experience
    class
    race
    age
    gender
    alignment
    attackBonus
    currentHp
    maxHp
    surpriseChance
    paralyze
    poison
    breathWeapon
    magicalDevice
    magic
    charisma
    constitution
    dexterity
    intelligence
    strength
    wisdom
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
    copper
    silver
    gold
    standard
    parry
    improvedParry
    press
    defensive
    effects {
      id
      method
      target
      type
      value
    }
    retainers {
      class
      hitpoints
      id
      level
      name
      position
      share
      wage
    }
    properties {
      description
      id
      location
      name
      rent
      value
    }
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "class",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "characterSheet",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "CharacterSheet",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "experience",
        "args": null,
        "storageKey": null
      },
      (v3/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "race",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "age",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "gender",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "alignment",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "attackBonus",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "currentHp",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "maxHp",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "surpriseChance",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "paralyze",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "poison",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "breathWeapon",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "magicalDevice",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "magic",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "charisma",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "constitution",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "dexterity",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "intelligence",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "strength",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "wisdom",
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
        "name": "silver",
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
        "name": "standard",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "parry",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "improvedParry",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "press",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "defensive",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "effects",
        "storageKey": null,
        "args": null,
        "concreteType": "Effect",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "method",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "target",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "retainers",
        "storageKey": null,
        "args": null,
        "concreteType": "Retainer",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "hitpoints",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "level",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
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
            "name": "share",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "wage",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "properties",
        "storageKey": null,
        "args": null,
        "concreteType": "Property",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "location",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rent",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CharacterSheetQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterSheetQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v5/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterSheetQuery",
    "id": null,
    "text": "query CharacterSheetQuery(\n  $id: String!\n) {\n  characterSheet(id: $id) {\n    id\n    name\n    experience\n    class\n    race\n    age\n    gender\n    alignment\n    attackBonus\n    currentHp\n    maxHp\n    surpriseChance\n    paralyze\n    poison\n    breathWeapon\n    magicalDevice\n    magic\n    charisma\n    constitution\n    dexterity\n    intelligence\n    strength\n    wisdom\n    architecture\n    bushcraft\n    climbing\n    languages\n    openDoors\n    search\n    sleightOfHand\n    sneakAttack\n    stealth\n    tinkering\n    copper\n    silver\n    gold\n    standard\n    parry\n    improvedParry\n    press\n    defensive\n    effects {\n      id\n      method\n      target\n      type\n      value\n    }\n    retainers {\n      class\n      hitpoints\n      id\n      level\n      name\n      position\n      share\n      wage\n    }\n    properties {\n      description\n      id\n      location\n      name\n      rent\n      value\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'fecd22447d01af55f8bb974ed22097ca';
export default node;
