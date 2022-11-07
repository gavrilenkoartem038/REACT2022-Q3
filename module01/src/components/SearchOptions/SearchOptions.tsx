import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchData } from 'store/mainPageSlice';
import { useAppSelector } from 'store/store';

import Select from 'components/Select/Select';

import './SearchOptions.css';

function SearchOptions() {
  const searchData = useAppSelector((state) => state.mainPage.searchData);
  const dispatch = useDispatch();

  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    dispatch(changeSearchData({ ...searchData, [name]: value }));
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
}

export default SearchOptions;
