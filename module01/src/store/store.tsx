import React, { createContext, Dispatch, useReducer } from 'react';

import { formPageReducer, mainPageReducer } from './reducers';
import { FormPage, FormPageActions, MainPage, MainPageActions } from './types';

interface Props {
  children: React.ReactNode;
}

const initialState = {
  formPage: {
    personCards: [],
    formFields: {
      name: '',
      surname: '',
      date: '',
      country: 'BY',
      file: {} as FileList,
      dataProcessing: false,
    },
    needValidate: false,
  },
  mainPage: {
    cards: [],
    searchOptions: {
      sort: 'name',
      order: 'asc',
      limit: 20,
    },
  },
};

type InitialStateType = {
  formPage: FormPage;
  mainPage: MainPage;
};

const Context = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<FormPageActions | MainPageActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const Reducer = (
  { formPage, mainPage }: InitialStateType,
  action: FormPageActions | MainPageActions
) => ({
  formPage: formPageReducer(formPage, action as FormPageActions),
  mainPage: mainPageReducer(mainPage, action as MainPageActions),
});

function Store({ children }: Props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export { Context, Store };
