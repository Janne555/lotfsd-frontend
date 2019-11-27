import { createAction } from 'typesafe-actions'

const updateAttribute = createAction('UPDATE_ATTRIBUTE', (name: keyof Attributes, value: number) => ({ name, value }))()

export {
  updateAttribute
}