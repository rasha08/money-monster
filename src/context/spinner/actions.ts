import {
  HIDE_LOADING_SPINNER,
  HideLoadingSpinnerAction,
  SHOW_LOADING_SPINNER,
  ShowLoadingSpinnerAction
} from './types';

export const showLoadingSpinnerAction = (
  dispatch: (action: ShowLoadingSpinnerAction) => void
): void => {
  dispatch({
    type: SHOW_LOADING_SPINNER
  });
};

export const hideLoadingSpinnerAction = (
  dispatch: (action: HideLoadingSpinnerAction) => void
): void => {
  dispatch({
    type: HIDE_LOADING_SPINNER
  });
};
