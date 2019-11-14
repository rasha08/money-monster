import {GeneralPopUpModel} from '../../shared/models';
import {CLEAR_POPUP_DATA, ClearPopupDataAction, SET_POPUP_DATA, SetPopupDataAction} from './types';

export const initialPopupState: GeneralPopUpModel = {
  message: '',
  type: ''
};

export const popupReducer = (
  state: GeneralPopUpModel = initialPopupState,
  action: SetPopupDataAction | ClearPopupDataAction
): GeneralPopUpModel => {
  switch (action.type) {
    case SET_POPUP_DATA:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_POPUP_DATA:
      return initialPopupState;
    default:
      return state;
  }
};
