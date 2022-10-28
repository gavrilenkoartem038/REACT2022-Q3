import React, { useContext, useEffect, useState } from 'react';
import { Context } from 'store/store';
import { ActionTypes } from 'store/types';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Search from 'components/Search/Search';
import SearchOptions from 'components/SearchOptions/SearchOptions';

const baseURL = 'https://the-one-api.dev/v2/character';

function MainPage() {
  const [isPending, setIsPending] = useState(false);
  const [isErrorRequest, setIsErrorRequest] = useState(false);

  const { state, dispatch } = useContext(Context);

  const { searchOptions } = state.mainPage;

  const getData = async (searchStr: string) => {
    setIsPending(true);
    const url = `${baseURL}?name=/${searchStr}/i&sort=${searchOptions.sort}:${searchOptions.order}&limit=${searchOptions.limit}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer AhcBdDNRNxMpvxbQVSHq',
        },
      });
      const data = await response.json();
      setIsPending(false);
      dispatch({
        type: ActionTypes.SetCards,
        payload: data.docs,
      });
      setIsErrorRequest(false);
    } catch {
      setIsPending(false);
      dispatch({
        type: ActionTypes.SetCards,
        payload: [],
      });
      setIsErrorRequest(true);
    }
  };

  useEffect(() => {
    const search: string = localStorage.getItem('search') || '';
    getData(search);
  }, [searchOptions.sort, searchOptions.order, searchOptions.limit]);

  return (
    <>
      <Search func={getData} />
      <SearchOptions />
      {isPending ? (
        <Loader />
      ) : (
        <CardList cards={state.mainPage.cards} isErrorRequest={isErrorRequest} />
      )}
    </>
  );
}

export default MainPage;
