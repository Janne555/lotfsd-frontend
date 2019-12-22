const isLoggedIn = (state: RootState) => true
const characterId = (characterName: string) => (state: RootState): string | undefined => state.system.characters.byName[characterName]

export {
  isLoggedIn as selectIsLoggedIn,
  characterId as selectCharacterId
}