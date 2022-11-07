import React, { useContext } from 'react';
import { Context } from 'store/store';
import { ActionTypes } from 'store/types';

import Select from 'components/Select/Select';

import './SearchOptions.css';

const SearchOptions = () => {
  const { state, dispatch } = useContext(Context);
  const { searchData } = state.mainPage;

  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    dispatch({
      type: ActionTypes.ChangeSearchData,
      payload: { ...searchData, [name]: value },
    });
  };

  return (
    <div className="search-options">
      <Select
        name="sort"
        label="Sort by"
        values={['name', 'race', 'gender']}
        value={searchData.sort}
        onChange={changeSelect}
        testId="sort"
      />
      <Select
        name="order"
        label="Sort order"
        values={['asc', 'desc']}
        value={searchData.order}
        onChange={changeSelect}
      />
      <Select
        name="limit"
        label="Limit per page"
        values={['20', '30', '40', '50']}
        value={searchData.limit}
        onChange={changeSelect}
      />
    </div>
  );
};

export default SearchOptions;
