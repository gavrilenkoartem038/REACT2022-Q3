import React, { useEffect } from 'react';
import { fetchCharacters } from 'store/mainPageSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import Search from 'components/Search/Search';
import SearchOptions from 'components/SearchOptions/SearchOptions';

const MainPage = () => {
  const { searchData, searchString, pending } = useAppSelector((state) => state.mainPage);
  const dispatch = useAppDispatch();

  const getData = () => {
    dispatch(
      fetchCharacters({
        searchString,
        sort: searchData.sort,
        order: searchData.order,
        limit: searchData.limit,
        page: searchData.page,
      })
    );
  };

  useEffect(() => {
    getData();
  }, [searchData.sort, searchData.order, searchData.limit, searchData.page]);

  return (
    <>
      <Search func={getData} />
      <SearchOptions />
      {pending ? (
        <Loader />
      ) : (
        <>
          <Pagination />
          <CardList />
        </>
      )}
    </>
  );
};

export default MainPage;
