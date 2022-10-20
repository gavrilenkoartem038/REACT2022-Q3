import React, { ChangeEvent, FormEvent, useState } from 'react';

import './Search.css';

interface Props {
  func: (el: string) => void;
}

function Search(props: Props) {
  const [value, setValue] = useState(localStorage.getItem('search') || '');

  const { func } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('search', value);
    return func(value);
  };

  return (
    <div className="flex justify-center pb-4 w-full">
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          value={value}
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
