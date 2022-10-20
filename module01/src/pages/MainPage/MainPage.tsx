import React, { useEffect, useState } from 'react';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Search from 'components/Search/Search';

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const getData = (searchStr: string) => {
    setIsPending(true);
    const url = `https://rickandmortyapi.com/api/character?name=${searchStr}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsPending(false);
        setCards(data.results);
      });
  };

  useEffect(() => {
    const search: string = localStorage.getItem('search') || '';
    getData(search);
  }, []);

  return (
    <>
      <Search func={getData} />
      {isPending ? <Loader /> : <CardList cards={cards} />}
    </>
  );
}

export default MainPage;
