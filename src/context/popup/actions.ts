import { GeneralPopUpModel } from '../../shared/models';
import {
  CLEAR_POPUP_DATA,
  ClearPopupDataAction,
  SET_POPUP_DATA,
  SetPopupDataAction
} from './types';

export const setPopupDataAction = (
  popUpData: GeneralPopUpModel,
  dispatch: (action: SetPopupDataAction) => void
): void => {
  dispatch({
    type: SET_POPUP_DATA,
    payload: popUpData
  });
};

export const clearPopupDataAction = (
  dispatch: (action: ClearPopupDataAction) => void
): void => {
  dispatch({
    type: CLEAR_POPUP_DATA
  });
};
