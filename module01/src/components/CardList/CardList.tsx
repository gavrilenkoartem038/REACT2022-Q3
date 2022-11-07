import React from 'react';
import { useAppSelector } from 'store/store';

import Card from 'components/Card/Card';

const CardList = () => {
  const { cards } = useAppSelector((state) => state.mainPage.searchData);
  const { errorMessage } = useAppSelector((state) => state.mainPage);
  const filterCards = () => {
    if (cards?.length) {
      // eslint-disable-next-line no-underscore-dangle
      return cards.map((card) => <Card card={card} key={card._id} />);
    }
    return (
      <div className="text-center">{errorMessage === '' ? 'Cards not found.' : errorMessage}</div>
    );
  };

  return <div className="container grid grid-cols-auto justify-evenly gap-8">{filterCards()}</div>;
};

export default CardList;
