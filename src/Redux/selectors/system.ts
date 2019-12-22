const isLoggedIn = (state: RootState) => true
const characterId = (state: RootState) => state.system.characterId

export {
  isLoggedIn as selectIsLoggedIn,
  characterId as selectCharacterId
}