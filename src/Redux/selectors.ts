import { RootState } from "./store";

const selectAttributes = (state: RootState) => state.characterSheet.attributes

export {
  selectAttributes
}