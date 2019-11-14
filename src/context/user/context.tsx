import React, {
  ComponentProps,
  createContext,
  FC,
  useContext, useEffect,
  useReducer
} from 'react';
import { UserModel } from '../../shared/models';
import { initialUserState, userReducer } from './reducer';
import { clearUserAction, setUserAction } from './actions';
import { useFirebaseAuth } from '../../firebase/useFirebaseAuth';

interface UserContext {
  state: UserModel;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const UserContext = createContext<UserContext>({} as UserContext);
export const useUserContext = (): UserContext => useContext(UserContext);
export const UserContextProvider = ({
  children
}: ComponentProps<FC>): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const { signIn, signUp, signOut, currentUser } = useFirebaseAuth();

  useEffect(() => {
    if(currentUser) {
      setUserAction({ id: currentUser.uid, ...currentUser }, dispatch)
    } else {
      clearUserAction(dispatch)
    }
  }, [currentUser])

  const isAuthenticated = (): boolean => {
    return !!state.id;
  };

  const login = async (email: string, password: string): Promise<void> => {
    await signIn(email, password);
  };

  const register = async (email: string, password: string): Promise<void> => {
    await signUp(email, password);
  };

  const logout = async (): Promise<void> => {
    await signOut()
  };

  return (
    <UserContext.Provider
      value={{ state, login, logout, register, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
