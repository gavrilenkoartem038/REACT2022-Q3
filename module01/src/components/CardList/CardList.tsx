import React from 'react';

import Card from 'components/Card/Card';
import { ICard } from 'types/types';

export interface Props {
  cards: ICard[];
  isErrorRequest: boolean;
}

function CardList(props: Props) {
  const filterCards = (cards: ICard[]) => {
    const { isErrorRequest } = props;
    if (cards && cards.length) {
      return cards.map((card) => <Card card={card} key={card.id} />);
    }
    return (
      <div className="text-center">
        {isErrorRequest ? 'Something went wrong. Please try again' : 'Cards not found'}
      </div>
    );
  };
  const { cards } = props;

  return (
    <div className="container grid grid-cols-auto justify-evenly gap-8">{filterCards(cards)}</div>
  );
}

export default CardList;
