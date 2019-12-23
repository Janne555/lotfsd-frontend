const isLoggedIn = (state: RootState) => true
const characterId = (characterName?: string) => (state: RootState): string | undefined => characterName ? state.system.characters.byName[characterName] : undefined
const characters = (state: RootState): string[] => Object.keys(state.system.characters.byName)
const username = (state: RootState): string => state.system.username

export {
  isLoggedIn as selectIsLoggedIn,
  characterId as selectCharacterId,
  characters as selectCharacters,
  username as selectUsername
}