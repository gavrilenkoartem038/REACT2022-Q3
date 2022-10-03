import { Card } from 'components/Card/Card';
import React from 'react';
import { ICard } from 'types/types';

export interface IProps {
  cards: ICard[];
  search: string;
}

class CardList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  filterCards(cards: ICard[]) {
    const filteredArr = cards.filter((card) =>
      this.props.search ? card.name.toLowerCase().includes(this.props.search.toLowerCase()) : card
    );
    if (filteredArr.length) {
      return filteredArr.map((card) => <Card {...card} key={card.id} />);
    } else {
      return <div>Cards not found</div>;
    }
  }

  render() {
    return (
      <div className="container flex flex-wrap gap-8 justify-around">
        {this.filterCards(this.props.cards)}
      </div>
    );
  }
}

export { CardList };
