import Form from 'components/Form/Form';
import { PersonCardList } from 'components/PersonalCards/PersonCardLise';
import React from 'react';
import { PersconCard } from 'types/types';

interface State {
  cards: PersconCard[];
}

class FormPage extends React.Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      cards: [],
    };

    this.addCard = this.addCard.bind(this);
  }

  addCard(card: PersconCard) {
    this.setState(({ cards }) => {
      const prevCards = [...cards];
      return { cards: [...prevCards, card] };
    });
  }

  render() {
    return (
      <>
        <Form addCard={this.addCard} />
        <PersonCardList cards={this.state.cards} />
      </>
    );
  }
}

export { FormPage };
