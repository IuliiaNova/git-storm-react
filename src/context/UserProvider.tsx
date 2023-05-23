import { useReducer, useMemo, useEffect } from 'react'
import UserContext from './UserContext'
import initialUserState from './initialUserState'
import userReducer from '../reducer/user.reducer';
import { registerLoginUserAction } from '../reducer/user.actions';
import { useAuth0 } from '@auth0/auth0-react'

export interface ChildrenProps {
  children: React.ReactNode
}

export default function UserProvider(props: ChildrenProps) {

  const [userState, dispatch] = useReducer(userReducer, initialUserState)
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    const registerLoginUser = async () => {
      const token = await getAccessTokenSilently()
      if (!isLoading && isAuthenticated && token) {
        registerLoginUserAction(dispatch, user, token)
      }
    }
    registerLoginUser()

  }, [user, isAuthenticated, isLoading, getAccessTokenSilently])



  const memoProvider = useMemo(
    () => ({
      ...userState
    }), [userState]
  );

  return (
    <UserContext.Provider value={memoProvider}>
      {props.children}
    </UserContext.Provider>
  )
}
