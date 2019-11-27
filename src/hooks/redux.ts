import { useSelector as useReduxSelector, TypedUseSelectorHook, useDispatch as useReduxDispatch } from 'react-redux'

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
const useDispatch = useReduxDispatch

export {
  useSelector,
  useDispatch
}