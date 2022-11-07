import React from 'react';

import Card from 'components/Card/Card';
import { ICard } from 'types/types';

export interface Props {
  cards: ICard[];
  isErrorRequest: boolean;
}

const CardList = ({ isErrorRequest, cards }: Props) => {
  const filterCards = () => {
    if (cards && cards.length) {
      // eslint-disable-next-line no-underscore-dangle
      return cards.map((card) => <Card card={card} key={card._id} />);
    }
    return (
      <div className="text-center">
        {isErrorRequest ? 'Something went wrong. Please try again' : 'Cards not found'}
      </div>
    );
  };

  return <div className="container grid grid-cols-auto justify-evenly gap-8">{filterCards()}</div>;
};

export default CardList;
