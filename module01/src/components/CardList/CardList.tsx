import React from 'react';

import Card from 'components/Card/Card';
import { ICard } from 'types/types';

export interface IProps {
  cards: ICard[];
  search: string;
}

class CardList extends React.Component<IProps> {
  filterCards(cards: ICard[]) {
    const { search } = this.props;
    const filteredArr = cards.filter((card) =>
      search ? card.name.toLowerCase().includes(search.toLowerCase()) : card
    );
    if (filteredArr.length) {
      return filteredArr.map((card) => <Card card={card} key={card.id} />);
    }
    return <div>Cards not found</div>;
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="container flex flex-wrap justify-around gap-8">{this.filterCards(cards)}</div>
    );
  }
}

export default CardList;
