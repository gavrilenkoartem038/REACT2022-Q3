import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { Context } from 'store/store';
import { ActionTypes } from 'store/types';

import './Search.css';

interface Props {
  func: () => void;
}

const Search = ({ func }: Props) => {
  const { state, dispatch } = useContext(Context);

  const { searchString } = state.mainPage;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.ChangeSearchString,
      payload: event.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('search', searchString);
    return func();
  };

  return (
    <div className="flex justify-center pb-4 w-full">
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          value={searchString}
          onChange={onChange}
          placeholder="Search..."
          className="p-2 w-8/12 search"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
