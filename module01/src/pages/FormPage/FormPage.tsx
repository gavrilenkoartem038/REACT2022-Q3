import React, { useContext } from 'react';
import { Context } from 'store/store';

import Form from 'components/Form/Form';
import PersonCardList from 'components/PersonalCards/PersonCardList';

const FormPage = () => {
  const { state } = useContext(Context);

  return (
    <>
      <Form />
      <PersonCardList cards={state.formPage.personCards} />
    </>
  );
};

export default FormPage;
