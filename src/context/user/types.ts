import { UserModel } from '../../shared/models';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export interface SetUserAction {
  type: typeof SET_USER;
  payload: UserModel;
}
