import { post } from '../../services'
import { ENDPOINTS } from '../../constants'
import { beginLogin, completeLogin, completeDataFetch } from '../reducers/system'

const loginThunk = (
  username: string,
  password: string
): AppThunk => async (dispatch, getState) => {
  dispatch(beginLogin(username))

  try {
    const { Token, Characters } = await post(ENDPOINTS.LOGIN, { username, password })

    dispatch(completeLogin(Token))

    dispatch(completeDataFetch({
      byName: Object.entries(Characters).reduce<Record<string, string>>((acc, [id, name]) => {
        acc[name] = id
        return acc
      }, {}),
      byId: Characters
    }))
  } catch (error) {
    return
  }
}

export { loginThunk }