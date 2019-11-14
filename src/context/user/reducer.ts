import { UserModel } from '../../shared/models';
import { ClearUserAction, SetUserAction } from './types';
import {firebaseAuth} from "../../firebase/firebaseApp";

export const initialUserState: UserModel = {
  email: '',
  id:  '',
  displayName: ''
};

export const userReducer = (
  state: UserModel = initialUserState,
  action: SetUserAction | ClearUserAction
): UserModel => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload
      };
    case 'CLEAR_USER':
      return initialUserState;
    default:
      return state;
  }
};
