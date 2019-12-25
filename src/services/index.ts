const normalizeCamelCase = (str: string): string => str.replace(/([A-Z])/g, ' $1').toLowerCase()

export {
  normalizeCamelCase
}
export * from './api'
export * from './validators'
export * from './typeGuards'
export * from './characterSheetServices'
