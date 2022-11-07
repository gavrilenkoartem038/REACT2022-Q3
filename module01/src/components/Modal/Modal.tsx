/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'store/store';

import { ICard } from 'types/types';

import './Modal.css';

const Modal = () => {
  const cards = useAppSelector((state) => state.mainPage.searchData.cards);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentCard = cards.find((el) => el._id === id);

  useEffect(() => {
    if (!currentCard) {
      navigate('/');
    }
  }, [currentCard, navigate]);

  const goBack = () => navigate(-1);

  const characterField = (field: keyof ICard) => {
    const fieldName = `${field.slice(0, 1).toUpperCase() + field.slice(1)}: `;
    const fieldData =
      !currentCard?.[field] || currentCard?.[field] === 'NaN' ? 'Unknown' : currentCard?.[field];
    return (
      <div>
        <span className="font-bold">{fieldName}</span> {fieldData}
      </div>
    );
  };

  return (
    <>
      <div className="modal-header">
        <div className="text-center font-bold">Card id: {currentCard?._id}</div>
        <button type="button" className="button" onClick={goBack}>
          Go back
        </button>
      </div>
      <div className="modal-content" aria-hidden="true" data-testid="modal-content">
        <div className="modal-info">
          <div className="self-center text-lg font-bold">{currentCard?.name}</div>
          <div className="modal-columns">
            <div className="modal-column">
              {characterField('birth')}
              {characterField('death')}
              {characterField('gender')}
              {characterField('hair')}
            </div>
            <div className="modal-column">
              {characterField('height')}
              {characterField('race')}
              {characterField('realm')}
              {characterField('spouse')}
            </div>
          </div>
          <a href={currentCard?.wikiUrl} target="_blank" className="link" rel="noreferrer">
            See more info
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
