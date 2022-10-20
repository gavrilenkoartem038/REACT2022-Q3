import React from 'react';

import Card from 'components/Card/Card';
import { ICard } from 'types/types';

export interface Props {
  cards: ICard[];
}

function CardList(props: Props) {
  const filterCards = (cards: ICard[]) => {
    if (cards && cards.length) {
      return cards.map((card) => <Card card={card} key={card.id} />);
    }
    return <div>Cards not found</div>;
  };
  const { cards } = props;

  return (
    <div className="container grid grid-cols-auto justify-evenly gap-8">{filterCards(cards)}</div>
  );
}

export default CardList;
