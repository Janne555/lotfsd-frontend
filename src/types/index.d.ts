type Theme = typeof import('../styles/theme').theme
type RootState = ReturnType<typeof import('../Redux/store').reducer>

type Attributes = {
  charisma: number
  constitution: number
  dexterity: number
  intelligence: number
  strength: number
  wisdom: number
}

type SavingThrows = {
  paralyze: number
  poison: number
  breathWeapon: number
  magicalDevice: number
  magic: number
}