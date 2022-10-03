import React from 'react';
import { ICard } from 'types/types';

class Card extends React.Component<ICard, { items: string }> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return (
      <div className="card flex flex-col border-2 rounded border-slate-500">
        <img src={this.props.image} alt={this.props.name} />
        <div className="self-center text-lg font-bold">{this.props.name}</div>
        <div>
          <span className="font-bold">Status:</span> {this.props.status}
        </div>
        <div>
          <span className="font-bold">Species:</span> {this.props.species}
        </div>
        <div>
          <span className="font-bold">Gender:</span> {this.props.gender}
        </div>
        <div>
          <span className="font-bold">Origin:</span> {this.props.origin.name}
        </div>
      </div>
    );
  }
}

export { Card };
