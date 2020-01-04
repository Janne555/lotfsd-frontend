import { post } from '../../services'
import { ENDPOINTS } from '../../constants'
import { beginLogin, completeLogin, completeDataFetch } from '../reducers/system'
import { fetchCharacterSheets, createCharacterSheet } from '../../services/graphql'
import { characterSheet } from '../../testData/initialState'

const loginThunk = (
  username: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(beginLogin(username))

  try {
    const token = await post(ENDPOINTS.LOGIN, { username, password })

    console.log(fetchCharacterSheets().then(console.log))
    console.log(createCharacterSheet(characterSheet))

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