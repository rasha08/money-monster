import React, {
  createContext,
  useReducer,
  useContext,
  ComponentProps,
  FC
} from 'react';

import {PopupTypes} from "../../shared/constants";
import { GeneralPopUpModel } from '../../shared/models';

import { popupReducer, initialPopupState } from './reducer';
import { clearPopupDataAction, setPopupDataAction } from './actions';

interface PopupContext {
  state: GeneralPopUpModel;
  setPopupData: (popupData: GeneralPopUpModel, type: PopupTypes) => void;
  clearPopup: () => void;
}

const PopupContext = createContext<PopupContext>({} as PopupContext);

export const usePopupContext = (): PopupContext => useContext(PopupContext);
export const PopupContextProvider = ({
  children
}: ComponentProps<FC>): JSX.Element => {
  const [state, dispatch] = useReducer(popupReducer, initialPopupState);

  const setPopupData = (popupData: GeneralPopUpModel, type: PopupTypes): void => {
    setPopupDataAction({...popupData, type}, dispatch);
  };

  const clearPopup = (): void => {
    clearPopupDataAction(dispatch);
  };

  return (
    <PopupContext.Provider value={{ state, setPopupData, clearPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
