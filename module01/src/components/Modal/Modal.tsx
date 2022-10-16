import React from 'react';

import { ICard } from 'types/types';

import './Modal.css';

interface Props {
  active: boolean;
  setActive: (isActive: boolean) => void;
  card: ICard;
}

class Modal extends React.Component<Props> {
  render() {
    const { active, setActive, card } = this.props;
    const { name, status, species, gender, origin, image } = card;
    return (
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={() => setActive(false)}
        aria-hidden="true"
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()} aria-hidden="true">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
