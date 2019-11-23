import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export {
  useSelector
}