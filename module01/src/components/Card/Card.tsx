import React, { useState } from 'react';

import Modal from 'components/Modal/Modal';
import { ICard } from 'types/types';

import './Card.css';

interface Props {
  card: ICard;
}

function Card(props: Props) {
  const { card } = props;
  const { name, race, gender } = card;
  const [active, setActive] = useState(false);

  const setModalActive = (isActive: boolean) => {
    setActive(isActive);
  };

  return (
    <>
      <div
        className="card flex flex-col p-4 gap-4 border-2 rounded-lg border-slate-300 bg-white"
        onClick={() => setActive(true)}
        aria-hidden="true"
        data-testid="card"
      >
        <div className="self-center text-lg font-bold">{name}</div>
        <div>
          <span className="font-bold">Race:</span> {race !== 'NaN' ? race : 'Unknown'}
        </div>
        <div>
          <span className="font-bold">Gender:</span> {gender !== 'NaN' ? gender : 'Unknown'}
        </div>
      </div>
      <Modal active={active} setActive={setModalActive} card={card} />
    </>
  );
}

export default Card;
