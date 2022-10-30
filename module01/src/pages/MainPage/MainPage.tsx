import React, { useContext, useEffect, useState } from 'react';
import { Context } from 'store/store';
import { ActionTypes } from 'store/types';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import Search from 'components/Search/Search';
import SearchOptions from 'components/SearchOptions/SearchOptions';

const baseURL = 'https://the-one-api.dev/v2/character';

function MainPage() {
  const [isPending, setIsPending] = useState(false);
  const [isErrorRequest, setIsErrorRequest] = useState(false);

  const { state, dispatch } = useContext(Context);

  const { searchData } = state.mainPage;

  const getData = async (searchStr: string) => {
    setIsPending(true);
    const url = `${baseURL}?name=/${searchStr}/i&sort=${searchData.sort}:${searchData.order}&limit=${searchData.limit}&page=${searchData.page}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer AhcBdDNRNxMpvxbQVSHq',
        },
      });
      const data = await response.json();
      setIsPending(false);
      if (data.pages < +searchData.page) {
        dispatch({
          type: ActionTypes.ChangeSearchData,
          payload: { ...searchData, page: `${data.pages}` },
        });
      } else {
        dispatch({
          type: ActionTypes.ChangeSearchData,
          payload: { ...searchData, cards: data.docs, pages: data.pages },
        });
      }
      setIsErrorRequest(false);
    } catch {
      setIsPending(false);
      dispatch({
        type: ActionTypes.ChangeSearchData,
        payload: { ...searchData, cards: [] },
      });
      setIsErrorRequest(true);
    }
  };

  useEffect(() => {
    const search: string = localStorage.getItem('search') || '';
    getData(search);
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
