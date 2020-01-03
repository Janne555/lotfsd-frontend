const isLoggedIn = (state: RootState) => state.system.state === 'loggedIn'

const characterId = (characterName?: string) =>
  (state: RootState): string | undefined =>
    state.system.state === 'loggedIn' && characterName ? state.system.characters.byName[characterName] : undefined

const characters = (state: RootState): string[] => state.system.state === 'loggedIn' ? Object.keys(state.system.characters.byName) : []

const username = (state: RootState): string | undefined => state.system.state !== 'loggedOut' ? state.system.username : undefined

export {
  isLoggedIn as selectIsLoggedIn,
  characterId as selectCharacterId,
  characters as selectCharacters,
  username as selectUsername
}