import React from 'react';

import { ICard } from 'types/types';

import './Modal.css';

interface Props {
  active: boolean;
  closeModal: () => void;
  card: ICard;
}

const Modal = ({ active, closeModal, card }: Props) => {
  const { name, status, species, gender, origin, image } = card;
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={closeModal}
      aria-hidden="true"
      data-testid="modal"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
        data-testid="modal-content"
      >
        <img src={image} alt={name} className="rounded-lg" />
        <div className="modal-info">
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
          <button type="button" className="modal-close" onClick={closeModal}>
            <div className="line" />
            <div className="line" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
