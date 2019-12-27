const itemIndex = (state: RootState): Item[] => state.itemIndex.allIds.map(id => state.itemIndex.byId[id])
const itemIndexById = (state: RootState): Record<string, Item> => state.itemIndex.byId

export {
  itemIndex as selectItemIndex,
  itemIndexById as selectItemIndexById
}

export * from './characterSheet'
export * from './system'