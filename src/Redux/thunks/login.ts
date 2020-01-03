import { post, queryGraphql } from '../../services'
import { ENDPOINTS } from '../../constants'
import { beginLogin, completeLogin, completeDataFetch } from '../reducers/system'
import graphql from 'babel-plugin-relay/macro'


const query = graphql`
  query Query {
    characterSheets {
      id
      attributeModifiers {
        charisma
      }
    }
  }
`

const loginThunk = (
  username: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(beginLogin(username))

  try {
    const { token } = await post(ENDPOINTS.LOGIN, { username, password })
    dispatch(completeLogin(token))

    const res = await queryGraphql({ taggedNode: query, type: {} as CharacterSheet }, {})
    console.log(res)

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