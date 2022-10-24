/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Input from 'components/Input/Input';
import Select, { SelectProps } from 'components/Select/Select';

import useFormFieldInitializer from './useFormFieldInitializer';

interface Props {
  needValidate: boolean;
}

const FormFieldWrapper = ({ needValidate }: Props) => {
  const initializeField = useFormFieldInitializer();
  return (
    <>
      <Input {...initializeField('name')} needValidate={needValidate} />
      <Input {...initializeField('surname')} needValidate={needValidate} />
      <Input {...initializeField('date')} needValidate={needValidate} />
      <Input {...initializeField('file')} needValidate={needValidate} />
      <Select {...(initializeField('country') as SelectProps)} />
      <Input {...initializeField('dataProcessing')} needValidate={needValidate} />
    </>
  );
};

export default FormFieldWrapper;
