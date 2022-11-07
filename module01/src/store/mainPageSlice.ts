/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICard } from 'types/types';

import { SearchData } from './types';

interface SearchParams {
  searchString: string;
  sort: string;
  order: string;
  limit: string;
  page: string;
}

export const fetchCharacters = createAsyncThunk(
  'mainPage/fetchCharacters',
  async (params: SearchParams, { rejectWithValue }) => {
    const baseURL = 'https://the-one-api.dev/v2/character';
    const url = `${baseURL}?name=/${params.searchString}/i&sort=${params.sort}:
    ${params.order}&limit=${params.limit}&page=${params.page}`;
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer AhcBdDNRNxMpvxbQVSHq',
      },
    });
    if (response.status === 429) {
      return rejectWithValue('fds');
    }
    const data = await response.json();
    return data;
  }
);

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
    pending: false,
    errorMessage: '',
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
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      if (action.payload.pages < +state.searchData.page) {
        state.searchData.page = `${action.payload.pages}`;
      }
      state.searchData.cards = action.payload.docs;
      state.searchData.pages = `${action.payload.pages}`;
      state.pending = false;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.pending = false;
      state.searchData.cards = [];
      if (action.payload) {
        state.errorMessage = 'Too many requests. Please try later';
      } else {
        state.errorMessage = 'Something went wrong. Please try later';
      }
    });
  },
});

export const { changeSearchData, changeSearchString } = mainPageSlice.actions;

export default mainPageSlice.reducer;
