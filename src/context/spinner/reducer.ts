import {
  HideLoadingSpinnerAction,
  ShowLoadingSpinnerAction,
  SpinnerState
} from './types';

export const initialLoadingSpinnerState: SpinnerState = {
  isVisible: false
};

export const loadingSpinnerReducer = (
  state: SpinnerState = initialLoadingSpinnerState,
  action: ShowLoadingSpinnerAction | HideLoadingSpinnerAction
): SpinnerState => {
  switch (action.type) {
    case 'SHOW_LOADING_SPINNER':
      if (state.isVisible) {
        return state;
      }
      return {
        ...state,
        ...{ isVisible: true }
      };
    case 'HIDE_LOADING_SPINNER':
      if (!state.isVisible) {
        return state;
      }
      return {
        ...state,
        ...{ isVisible: false }
      };
    default:
      return state;
  }
};
