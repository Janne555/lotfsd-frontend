import { post } from '../../services'
import { ENDPOINTS } from '../../constants'
import { beginLogin, completeLogin, completeDataFetch } from '../reducers/system'

const loginThunk = (
  username: string,
  password: string
): AppThunk => async (dispatch, getState) => {
  dispatch(beginLogin(username))

  try {
    const res = await post(ENDPOINTS.LOGIN, { json: { username, password } })
    const token = await res.text()

    dispatch(completeLogin(token))

    dispatch(completeDataFetch({
      byName: {},
      byId: {}
    }))
  } catch (error) {
    return
  }
}

export { loginThunk }