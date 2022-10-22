import React from 'react';

import Card from 'components/Card/Card';
import { ICard } from 'types/types';

export interface IProps {
  cards: ICard[];
  isErrorRequest: boolean;
}

class CardList extends React.Component<IProps> {
  filterCards(cards: ICard[]) {
    const { isErrorRequest } = this.props;
    if (cards && cards.length) {
      return cards.map((card) => <Card card={card} key={card.id} />);
    }
    return (
      <div>{isErrorRequest ? 'Something went wrong. Please try again' : 'Cards not found'}</div>
    );
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="container grid grid-cols-auto justify-evenly gap-8">
        {this.filterCards(cards)}
      </div>
    );
  }
}

export default CardList;
