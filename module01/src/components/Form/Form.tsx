/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCard, changeForm, toggleSubmitButtton } from 'store/formPageSlice';
import { useAppSelector } from 'store/store';

import './Form.css';

import { FormFields } from './Form.types';
import FormFieldWrapper from './FormFieldsWrapper';

const Form = () => {
  const { formFields, needValidate } = useAppSelector((state) => state.formPage);
  const dispatch = useDispatch();

  const methods = useForm<FormFields>({
    defaultValues: {
      name: formFields.name,
      surname: formFields.surname,
      date: formFields.date,
      country: formFields.country,
      file: {} as FileList,
      dataProcessing: formFields.dataProcessing,
    },
  });

  const {
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isDirty },
  } = methods;

  useEffect(() => {
    return () => {
      const { name, surname, date, country, dataProcessing } = getValues();
      dispatch(changeForm({ name, surname, date, country, file: {} as FileList, dataProcessing }));
    };
  }, [dispatch, getValues]);

  const resetForm = () => {
    reset({
      name: '',
      surname: '',
      date: '',
      country: 'BY',
      file: {} as FileList,
      dataProcessing: false,
    });
    dispatch(toggleSubmitButtton(false));
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const card = {
      name: data.name,
      surname: data.surname,
      file: URL.createObjectURL(data.file[0]),
      country: data.country,
      date: data.date,
    };
    dispatch(addCard(card));
    resetForm();
  };

  const onError: SubmitErrorHandler<FormFields> = () => {
    dispatch(toggleSubmitButtton(true));
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
        <FormFieldWrapper />
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
