const isLoggedIn = (state: RootState) => true
const characterId = (state: RootState): string => state.system.characterId ?? 'default'

export {
  isLoggedIn as selectIsLoggedIn,
  characterId as selectCharacterId
}