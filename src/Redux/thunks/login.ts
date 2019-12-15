import { post } from '../../services'

const login = (
  username: string,
  password: string
): AppThunk => async dispatch => {
  try {
    const foo = await post('LOGIN', { username, password })
    console.log(foo)
  } catch (error) {
  }
}

export default login