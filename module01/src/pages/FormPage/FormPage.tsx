import React, { useState } from 'react';

import Form from 'components/Form/Form';
import PersonCardList from 'components/PersonalCards/PersonCardList';
import { PersconCard } from 'types/types';

function FormPage() {
  const [cards, setCards] = useState([] as PersconCard[]);

  const addCard = (card: PersconCard) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <Form addCard={addCard} />
      <PersonCardList cards={cards} />
    </>
  );
}

export default FormPage;
