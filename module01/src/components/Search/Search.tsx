import React, { ChangeEvent, FormEvent } from 'react';
import { changeSearchString } from 'store/mainPageSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

import './Search.css';

interface Props {
  func: () => void;
}

function Search({ func }: Props) {
  const searchString = useAppSelector((state) => state.mainPage.searchString);
  const dispatch = useAppDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchString(event.target.value));
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
}

export default Search;
