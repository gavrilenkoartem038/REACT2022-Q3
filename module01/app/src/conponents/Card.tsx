import React from 'react';
import { ICard } from 'types.tsx/types';

class Card extends React.Component<ICard, { items: string }> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return (
      <div className="border-2 rounded">
        <img src={this.props.image} alt={this.props.name} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export { Card };
