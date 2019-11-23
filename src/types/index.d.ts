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