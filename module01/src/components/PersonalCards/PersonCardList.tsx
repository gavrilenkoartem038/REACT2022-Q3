import React from 'react';

import { PersconCard } from 'types/types';

interface Props {
  cards: PersconCard[];
}

const PersonCardList = ({ cards }: Props) => {
  return (
    <div className="container grid grid-cols-auto1 justify-evenly gap-8">
      {cards?.length > 0 &&
        cards.map((card) => {
          return (
            <div
              key={card.name}
              className="card flex flex-col p-4 border-2 rounded-lg border-slate-300 bg-white"
              data-testid="person-card"
            >
              <div className="w-48 h-48 flex self-center items-center justify-center">
                <img src={card.file} alt="" className="max-w-full max-h-full rounded-lg" />
              </div>
              <div>
                <span className="font-bold">Name:</span> {card.name}
              </div>
              <div>
                <span className="font-bold">Surname:</span> {card.surname}
              </div>
              <div>
                <span className="font-bold">Date of Birth:</span> {card.date}
              </div>
              <div>
                <span className="font-bold">Country:</span> {card.country}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PersonCardList;
