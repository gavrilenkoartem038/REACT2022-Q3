/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Input from 'components/Input/Input';
import { InputProps } from 'components/Input/Iput.types';
import Select, { SelectProps } from 'components/Select/Select';

import useFormFieldInitializer from './useFormFieldInitializer';

const FormFieldWrapper = () => {
  const initializeField = useFormFieldInitializer();
  return (
    <>
      <Input {...(initializeField('name') as InputProps)} />
      <Input {...(initializeField('surname') as InputProps)} />
      <Input {...(initializeField('date') as InputProps)} />
      <Input {...(initializeField('file') as InputProps)} />
      <Select {...(initializeField('country') as SelectProps)} />
      <Input {...(initializeField('dataProcessing') as InputProps)} />
    </>
  );
};

export default FormFieldWrapper;
