import React from 'react';
import { useAppSelector } from 'store/store';

import Form from 'components/Form/Form';
import PersonCardList from 'components/PersonalCards/PersonCardList';

function FormPage() {
  const { personCards } = useAppSelector((state) => state.formPage);

  return (
    <>
      <Form />
      <PersonCardList cards={personCards} />
    </>
  );
}

export default FormPage;
