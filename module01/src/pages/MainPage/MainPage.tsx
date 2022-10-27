import React, { useContext, useEffect, useState } from 'react';
import { Context } from 'store/store';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Search from 'components/Search/Search';
import SearchOptions from 'components/SearchOptions/SearchOptions';

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isErrorRequest, setIsErrorRequest] = useState(false);

  const { state, dispatch } = useContext(Context);

  const getData = (searchStr: string) => {
    setIsPending(true);
    const url = `https://the-one-api.dev/v2/character?name=/${searchStr}/i&sort=${state.mainPage.searchOptions.sort}:${state.mainPage.searchOptions.order}&limit=${state.mainPage.searchOptions.limit}`;
    fetch(url, {
      headers: {
        Authorization: 'Bearer AhcBdDNRNxMpvxbQVSHq',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsPending(false);
        setCards(data.docs);
        setIsErrorRequest(false);
      })
      .catch(() => {
        setIsPending(false);
        setCards([]);
        setIsErrorRequest(true);
      });
  };

  useEffect(() => {
    const search: string = localStorage.getItem('search') || '';
    getData(search);
  }, [
    state.mainPage.searchOptions.sort,
    state.mainPage.searchOptions.order,
    state.mainPage.searchOptions.limit,
  ]);

  return (
    <>
      <Search func={getData} />
      <SearchOptions />
      {isPending ? <Loader /> : <CardList cards={cards} isErrorRequest={isErrorRequest} />}
    </>
  );
}

export default MainPage;
