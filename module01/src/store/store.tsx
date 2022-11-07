import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import formPageReducer from './formPageSlice';
import mainPageReducer from './mainPageSlice';
import { FormPage, MainPage } from './types';

const store = configureStore({
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
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
