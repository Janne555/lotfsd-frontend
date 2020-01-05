import { post } from '../../services'
import { ENDPOINTS } from '../../constants'
import { beginLogin, completeLogin, completeDataFetch } from '../reducers/system'
import { fetchCharacterSheets, addInfo } from '../../services/graphql'
import { characterSheet } from '../../testData/initialState'
import { selectCharacterSheet } from '../selectors'

const loginThunk = (
  username: string,
  password: string
): AppThunk => async (dispatch, getState) => {
  dispatch(beginLogin(username))

  try {
    const token = await post(ENDPOINTS.LOGIN, { username, password })

    console.log(fetchCharacterSheets().then(console.log))
    // console.log(addInfo(selectCharacterSheet('a')(getState())))

    dispatch(completeLogin(token))

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