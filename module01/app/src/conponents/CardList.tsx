import { Card } from 'conponents/Card';
import React from 'react';
import { ICard } from 'types.tsx/types';

export interface IProps {
  cards: ICard[];
  search: string;
}

class CardList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="container flex flex-wrap gap-4 justify-around">
        {this.props.cards
          .filter((card) =>
            this.props.search
              ? card.name.toLowerCase().includes(this.props.search.toLowerCase())
              : card
          )
          .map((card) => (
            <Card {...card} key={card.id} />
          ))}
      </div>
    );
  }
}

export { CardList };
