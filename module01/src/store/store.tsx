import React, { createContext, Dispatch, useReducer } from 'react';

import formPageReducer from './reducers';
import FormPageActions, { FormPage } from './types';

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
};

type InitialStateType = {
  formPage: FormPage;
};

const Context = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<FormPageActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const Reducer = ({ formPage }: InitialStateType, action: FormPageActions) => ({
  formPage: formPageReducer(formPage, action as FormPageActions),
});

function Store({ children }: Props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export { Context, Store };
