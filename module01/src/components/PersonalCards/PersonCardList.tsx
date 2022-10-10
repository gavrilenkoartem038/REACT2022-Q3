import React from 'react';
import { PersconCard } from 'types/types';

interface Props {
  cards: PersconCard[];
}

class PersonCardList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container grid justify-evenly gap-8 grid-cols-auto1">
        {this.props.cards.length > 0 &&
          this.props.cards.map((card, index) => {
            return (
              <div
                key={index}
                className="card flex flex-col border-2 rounded-lg p-4 border-slate-300 bg-white"
              >
                <div className="w-48 h-48 flex self-center items-center justify-center">
                  <img src={card.file} alt="" className="rounded-lg max-w-full max-h-full" />
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
  }
}

export { PersonCardList };
