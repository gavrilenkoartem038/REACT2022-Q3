/* eslint-disable import/no-duplicates */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { FormFields } from 'components/Form/Form.types';
import { PersconCard } from 'types/types';

const formPageSlice = createSlice({
  name: 'formPage',
  initialState: {
    personCards: [] as PersconCard[],
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
  reducers: {
    addCard: (state, action: PayloadAction<PersconCard>) => {
      state.personCards.push(action.payload);
    },
    changeForm: (state, action: PayloadAction<FormFields>) => {
      return {
        ...state,
        formFields: action.payload,
      };
    },
    toggleSubmitButtton: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        needValidate: action.payload,
      };
    },
  },
});

export const { addCard, changeForm, toggleSubmitButtton } = formPageSlice.actions;

export default formPageSlice.reducer;
