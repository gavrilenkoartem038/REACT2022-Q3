import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ICard } from 'types/types';

import './Card.css';

interface Props {
  card: ICard;
}

function Card(props: Props) {
  const { card } = props;
  const { name, race, gender, _id } = card;

  const navigate = useNavigate();

  return (
    <div
      className="card flex flex-col p-4 gap-4 border-2 rounded-lg border-slate-300 bg-white"
      onClick={() => navigate(`/cards/${_id}`)}
      aria-hidden="true"
      data-testid="card"
    >
      <div className="self-center text-lg font-bold">{name}</div>
      <div>
        <span className="font-bold">Race:</span> {!race || race === 'NaN' ? 'Unknown' : race}
      </div>
      <div>
        <span className="font-bold">Gender:</span>{' '}
        {!gender || gender === 'NaN' ? 'Unknown' : gender}
      </div>
    </div>
  );
}

export default Card;
