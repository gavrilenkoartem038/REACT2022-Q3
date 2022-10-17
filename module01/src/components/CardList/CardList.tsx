import React from 'react';

import Card from 'components/Card/Card';
import { ICard } from 'types/types';

export interface IProps {
  cards: ICard[];
}

class CardList extends React.Component<IProps> {
  static filterCards(cards: ICard[]) {
    if (cards && cards.length) {
      return cards.map((card) => <Card card={card} key={card.id} />);
    }
    return <div>Cards not found</div>;
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="container grid grid-cols-auto justify-evenly gap-8">
        {CardList.filterCards(cards)}
      </div>
    );
  }
}

export default CardList;
