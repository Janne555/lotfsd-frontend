const isLoggedIn = (state: RootState) => true
const characterId = (characterName: string) => (state: RootState) => state.system.characters.byName[characterName]

export {
  isLoggedIn as selectIsLoggedIn,
  characterId as selectCharacterId
}