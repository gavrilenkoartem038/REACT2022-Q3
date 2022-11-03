import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchData } from 'store/mainPageSlice';
import { useAppSelector } from 'store/store';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import Search from 'components/Search/Search';
import SearchOptions from 'components/SearchOptions/SearchOptions';

const baseURL = 'https://the-one-api.dev/v2/character';

function MainPage() {
  const [isPending, setIsPending] = useState(false);
  const [isErrorRequest, setIsErrorRequest] = useState(false);

  const { searchData, searchString } = useAppSelector((state) => state.mainPage);
  const dispatch = useDispatch();

  const getData = async () => {
    setIsPending(true);
    const url = `${baseURL}?name=/${searchString}/i&sort=${searchData.sort}:${searchData.order}&limit=${searchData.limit}&page=${searchData.page}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer AhcBdDNRNxMpvxbQVSHq',
        },
      });
      const data = await response.json();
      setIsPending(false);
      if (data.pages < +searchData.page) {
        dispatch(changeSearchData({ ...searchData, page: `${data.pages}` }));
      } else {
        dispatch(changeSearchData({ ...searchData, cards: data.docs, pages: `${data.pages}` }));
      }
      setIsErrorRequest(false);
    } catch {
      setIsPending(false);
      dispatch(changeSearchData({ ...searchData, cards: [] }));
      setIsErrorRequest(true);
    }
  };

  useEffect(() => {
    getData();
  }, [searchData.sort, searchData.order, searchData.limit, searchData.page]);

  return (
    <>
      <Search func={getData} />
      <SearchOptions />
      {isPending ? (
        <Loader />
      ) : (
        <>
          <Pagination />
          <CardList cards={searchData.cards} isErrorRequest={isErrorRequest} />
        </>
      )}
    </>
  );
}

export default MainPage;
