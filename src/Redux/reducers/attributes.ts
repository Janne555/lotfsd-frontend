const initialState: Attributes = {
  charisma: 18,
  constitution: 18,
  dexterity: 18,
  intelligence: 18,
  strength: 18,
  wisdom: 18
}

function attributes(state: Attributes = initialState, action: any): Attributes {
  return state
}

export default attributes