/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import './Form.css';

import { FormFields, Props } from './Form.types';
import FormFieldsWrapper from './FormFieldsWrapper';

const Form = ({ addCard }: Props) => {
  const methods = useForm<FormFields>();
  const {
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = methods;

  const [needValidate, setNeedValidate] = useState(false);

  const resetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    addCard({
      name: data.name,
      surname: data.surname,
      file: URL.createObjectURL(data.file[0]),
      country: data.country,
      date: data.date,
    });
    reset({
      name: '',
      surname: '',
      date: '',
      file: {} as FileList,
      country: 'BY',
      dataProcessing: false,
    });
    setNeedValidate(false);
  };

  const onError: SubmitErrorHandler<FormFields> = () => {
    setNeedValidate(true);
  };

  const IsBbuttonDisabled = (): boolean => {
    if (
      (isDirty && !needValidate) ||
      (needValidate &&
        !errors.name &&
        !errors.surname &&
        !errors.date &&
        !errors.file &&
        !errors.country &&
        !errors.dataProcessing)
    ) {
      return false;
    }
    return true;
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-2 border-2 rounded-lg p-4 border-slate-300 bg-white max-w-sm"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <FormFieldsWrapper needValidate={needValidate} />
        <div className="flex gap-2">
          <button
            type="submit"
            data-testid="button-submit"
            disabled={IsBbuttonDisabled()}
            className="button"
          >
            Create card
          </button>
          <button type="button" onClick={resetForm} data-testid="button-reset" className="button">
            Reset
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
