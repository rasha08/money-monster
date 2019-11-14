export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';
export const HIDE_LOADING_SPINNER = 'HIDE_LOADING_SPINNER';

export interface SpinnerState {
  isVisible: boolean;
}

export interface ShowLoadingSpinnerAction {
  type: typeof SHOW_LOADING_SPINNER;
}

export interface HideLoadingSpinnerAction {
  type: typeof HIDE_LOADING_SPINNER;
}
