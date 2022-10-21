import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Input from '../Input/Input';
import Select from '../Select/Select';

import './Form.css';

import { FormFields, Props } from './Form.types';

const countries = ['BY', 'UA', 'GE', 'PL', 'LT'];

function Form(props: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormFields>();

  const [needValidate, setNeedValidate] = useState(false);

  const resetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const { addCard } = props;
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

  const name = register('name', {
    required: 'Required name',
    minLength: {
      value: 3,
      message: 'Type at least 3 symbols',
    },
  });

  const surname = register('surname', {
    required: 'Required surname',
    minLength: {
      value: 3,
      message: 'Type at least 3 symbols',
    },
  });

  const date = register('date', {
    required: 'Required date',
    validate: (value) => {
      return new Date(value) <= new Date();
    },
  });

  const file = register('file', {
    validate: (data) => {
      const regexp = /\.(jpe?g|svg|png|gif)$/i;
      if (data.length > 0) {
        if (data[0].name.match(regexp)) {
          return true;
        }
      }
      return false;
    },
  });

  const country = register('country');

  const dataProcessing = register('dataProcessing', {
    validate: (value) => {
      return value;
    },
  });

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
    <form
      className="flex flex-col gap-2 border-2 rounded-lg p-4 border-slate-300 bg-white max-w-sm"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Input
        type="text"
        name="name"
        label="Name"
        register={name}
        error={errors.name}
        needValidate={needValidate}
      />
      <Input
        type="text"
        name="surname"
        label="Surname"
        register={surname}
        error={errors.surname}
        needValidate={needValidate}
      />
      <Input
        type="date"
        name="date"
        label="Date"
        register={date}
        error={errors.date}
        errorMessage="Type date before now"
        needValidate={needValidate}
      />
      <Input
        type="file"
        name="file"
        label="Avatar"
        register={file}
        error={errors.file}
        errorMessage="Add your avatar or choose file with correct extantion"
        needValidate={needValidate}
      />
      <Select name="select" label="Country" register={country} values={countries} />

      <Input
        type="checkbox"
        name="checkbox"
        label="I agree with data processing"
        register={dataProcessing}
        error={errors.dataProcessing}
        errorMessage="You must agree with data processing"
        needValidate={needValidate}
      />

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
  );
}

export default Form;
