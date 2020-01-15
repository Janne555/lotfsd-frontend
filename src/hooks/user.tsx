import React, { ReactNode } from 'react'
import { post } from '../services'
import { ENDPOINTS } from '../constants'

type User = {
  username: string
  token?: string
}

type LoginContext = {
  user?: User
  login: (username: string, password: string) => void
  logout: () => void
}

const LoginContext = React.createContext<LoginContext | undefined>(undefined)

type ProviderProps = {
  children: ReactNode
  user?: User
}

function LoginProvider({ children }: ProviderProps): JSX.Element {
  const [user, setUser] = React.useState<User>()

  React.useEffect(() => {
    const username = window.localStorage.getItem("username")
    const token = window.localStorage.getItem("token")

    if (username && token) {
      setUser({
        username,
        token
      })
    }
  }, [])

  async function login(username: string, password: string) {
    const response = await post(ENDPOINTS.LOGIN, { json: { username, password } })
    const token = await response.text()
    setUser({ username, token })
    window.localStorage.setItem("token", token)
    window.localStorage.setItem("username", username)
  }

  function logout() {
    setUser(undefined)
    window.localStorage.clear()
  }

  return (
    <LoginContext.Provider value={{
      login,
      logout,
      user
    }}>
      {children}
    </LoginContext.Provider>
  )
}

function useLogin() {
  const userContext = React.useContext(LoginContext)
  if (!userContext) {
    throw Error("Must be used within user context")
  }
  return userContext
}

function useLoginStatus(): LoginStatus {
  const login = useLogin()

  if (!login.user) {
    return 'logged-out'
  }

  if (!login.user.token) {
    return 'logging-in'
  }

  return 'logged-in'
}

function useToken(): string {
  const login = useLogin()
  if (!login.user?.token) {
    throw Error("Not logged in")
  }

  return login.user.token
}

function useUsername(): string {
  const login = useLogin()
  if (!login.user) {
    throw Error("not logged in")
  }

  return login.user.username
}

export {
  LoginContext,
  LoginProvider,
  useLoginStatus,
  useToken,
  useUsername,
  useLogin
}