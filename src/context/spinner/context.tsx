import React, {
  ComponentProps,
  createContext,
  FC,
  useContext,
  useReducer
} from 'react';
import { SpinnerState } from './types';
import { initialLoadingSpinnerState, loadingSpinnerReducer } from './reducer';
import { hideLoadingSpinnerAction, showLoadingSpinnerAction } from './actions';

interface SpinnerContext {
  state: SpinnerState;
  showSpinner: () => void;
  hideSpinner: () => void;
}

const SpinnerContext = createContext({} as SpinnerContext);
export const useSpinnerContext = (): SpinnerContext =>
  useContext(SpinnerContext);
export const SpinnerContextPrivider = ({
  children
}: ComponentProps<FC>): JSX.Element => {
  const [state, dispatch] = useReducer(
    loadingSpinnerReducer,
    initialLoadingSpinnerState
  );

  const showSpinner = (): void => {
    showLoadingSpinnerAction(dispatch);
  };

  const hideSpinner = (): void => {
    hideLoadingSpinnerAction(dispatch);
  };

  return (
    <SpinnerContext.Provider value={{ state, showSpinner, hideSpinner }}>
      {children}
    </SpinnerContext.Provider>
  );
};
