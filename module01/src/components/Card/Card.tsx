import React, { useState } from 'react';

import Modal from 'components/Modal/Modal';
import { ICard } from 'types/types';

import './Card.css';

interface Props {
  card: ICard;
}

function Card(props: Props) {
  const { card } = props;
  const { name, image } = card;
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
        <img src={image} alt={name} className="rounded-lg" />
        <div className="self-center text-lg font-bold">{name}</div>
      </div>
      <Modal active={active} setActive={setModalActive} card={card} />
    </>
  );
}

export default Card;
