import { UserModel } from '../../shared/models';
import { CLEAR_USER, ClearUserAction, SET_USER, SetUserAction } from './types';

export const setUserAction = (
  user: UserModel,
  dispatch: (action: SetUserAction) => void
): void => {
  dispatch({
    type: SET_USER,
    payload: user
  });
};

export const clearUserAction = (
  dispatch: (action: ClearUserAction) => void
): void => {
  dispatch({
    type: CLEAR_USER
  });
};
