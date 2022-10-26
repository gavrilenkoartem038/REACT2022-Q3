import React from 'react';

import { ICard } from 'types/types';

import './Modal.css';

interface Props {
  active: boolean;
  setActive: (isActive: boolean) => void;
  card: ICard;
}

function Modal(props: Props) {
  const { active, setActive, card } = props;
  const { birth, death, gender, hair, name } = card;
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
      aria-hidden="true"
      data-testid="modal"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
        data-testid="modal-content"
      >
        <div className="modal-info">
          <div className="self-center text-lg font-bold">{name}</div>
          <div>
            <span className="font-bold">Birth:</span> {birth}
          </div>
          <div>
            <span className="font-bold">Death:</span> {death}
          </div>
          <div>
            <span className="font-bold">Gender:</span> {gender}
          </div>
          <div>
            <span className="font-bold">Hair:</span> {hair}
          </div>
          <button type="button" className="modal-close" onClick={() => setActive(false)}>
            <div className="line" />
            <div className="line" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
