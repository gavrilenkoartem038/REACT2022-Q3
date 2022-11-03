import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import formPageReducer from './formPageSlice';
import mainPageReducer from './mainPageSlice';
import { FormPage, MainPage } from './types';

export default configureStore({
  reducer: {
    mainPage: mainPageReducer,
    formPage: formPageReducer,
  },
});

export type InitialStateType = {
  formPage: FormPage;
  mainPage: MainPage;
};

export const useAppSelector: TypedUseSelectorHook<InitialStateType> = useSelector;
