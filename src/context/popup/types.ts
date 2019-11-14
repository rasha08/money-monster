import { GeneralPopUpModel } from '../../shared/models';

export const SET_POPUP_DATA = 'SET_POPUP_DATA';
export const CLEAR_POPUP_DATA = 'CLEAR_POPUP_DATA';

export interface SetPopupDataAction {
  type: typeof SET_POPUP_DATA;
  payload: GeneralPopUpModel;
}

export interface ClearPopupDataAction {
  type: typeof CLEAR_POPUP_DATA;
}
