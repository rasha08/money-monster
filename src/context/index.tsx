import React, { ComponentProps, FC } from 'react';
import { UserContextProvider } from './user';
import { PopupContextProvider } from './popup';
import { SpinnerContextPrivider } from './spinner';
import { combineComponents } from '../shared/utils';

export const CombinedContextProviders = combineComponents(
  PopupContextProvider,
  SpinnerContextPrivider,
  UserContextProvider
);
