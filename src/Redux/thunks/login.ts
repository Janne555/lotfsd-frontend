import { post, queryGraphql } from '../../services'
import { ENDPOINTS } from '../../constants'
import { beginLogin, completeLogin, completeDataFetch } from '../reducers/system'
import { characterSheets } from '../../constants/graphql/queries'

const loginThunk = (
  username: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(beginLogin(username))

  try {
    const { token } = await post(ENDPOINTS.LOGIN, { username, password })
    dispatch(completeLogin(token))

    console.log(queryGraphql({ taggedNode: characterSheets, type: {} as CharacterSheet }, {}).then(console.log))

    dispatch(completeDataFetch({
      byId: {
        a: 'Zoidberg',
      },
      byName: {
        Zoidberg: 'a',
        Mardrick: 'a'
      }
    }))
  } catch (error) {
    return
  }
}

export { loginThunk }