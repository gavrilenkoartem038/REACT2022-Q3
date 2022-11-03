/* eslint-disable import/no-duplicates */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ICard } from 'types/types';

import { SearchData } from './types';

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState: {
    searchData: {
      cards: [] as ICard[],
      sort: 'name',
      order: 'asc',
      limit: '20',
      page: '1',
      pages: '0',
    },
    searchString: localStorage.getItem('search') || '',
  },
  reducers: {
    changeSearchData: (state, action: PayloadAction<SearchData>) => {
      return {
        ...state,
        searchData: action.payload,
      };
    },
    changeSearchString: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchString: action.payload,
      };
    },
  },
});

export const { changeSearchData, changeSearchString } = mainPageSlice.actions;

export default mainPageSlice.reducer;
