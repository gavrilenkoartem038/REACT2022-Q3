import React from 'react';

import { ICard } from 'types/types';

import './Card.css';

interface IntCard {
  card: ICard;
}

class Card extends React.Component<IntCard> {
  render() {
    const { card } = this.props;
    const { name, status, species, gender, origin, image } = card;
    return (
      <div className="card flex flex-col p-4 border-2 rounded-lg border-slate-300 bg-white">
        <img src={image} alt={name} className="rounded-lg" />
        <div className="self-center text-lg font-bold">{name}</div>
        <div>
          <span className="font-bold">Status:</span> {status}
        </div>
        <div>
          <span className="font-bold">Species:</span> {species}
        </div>
        <div>
          <span className="font-bold">Gender:</span> {gender}
        </div>
        <div>
          <span className="font-bold">Origin:</span> {origin.name}
        </div>
      </div>
    );
  }
}

export default Card;
