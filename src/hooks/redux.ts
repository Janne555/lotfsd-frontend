import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../Redux/store'

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export {
  useSelector
}