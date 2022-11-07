import { FieldErrorsImpl } from 'react-hook-form';

const countries = ['BY', 'UA', 'GE', 'PL', 'LT'];

const formFieldsProps = {
  name: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.name,
    inputProps: {
      type: 'text',
      name: 'name',
      label: 'Name',
    },
    inputRules: {
      required: 'Required name',
      minLength: {
        value: 3,
        message: 'Type at least 3 symbols',
      },
    },
  },
  surname: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.surname,
    inputProps: {
      type: 'text',
      name: 'surname',
      label: 'Surname',
    },
    inputRules: {
      required: 'Required surname',
      minLength: {
        value: 3,
        message: 'Type at least 3 symbols',
      },
    },
  },
  date: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.date,
    inputProps: {
      type: 'date',
      name: 'date',
      label: 'Date',
      errorMessage: 'Type date before now',
    },
    inputRules: {
      required: 'Required date',
      validate: (value: string) => {
        return new Date(value) <= new Date();
      },
    },
  },
  file: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.file,
    inputProps: {
      type: 'file',
      name: 'file',
      label: 'Avatar',
      errorMessage: 'Add your avatar or choose file with correct extantion',
    },
    inputRules: {
      validate: (data: FileList) => {
        const regexp = /\.(jpe?g|svg|png|gif)$/i;
        if (data.length > 0) {
          if (data[0].name.match(regexp)) {
            return true;
          }
        }
        return false;
      },
    },
  },
  country: {
    error: false,
    inputProps: {
      name: 'select',
      label: 'Country',
      values: countries,
    },
    inputRules: {},
  },
  dataProcessing: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.dataProcessing,
    inputProps: {
      type: 'checkbox',
      name: 'checkbox',
      label: 'I agree with data processing',
      errorMessage: 'You must agree with data processing',
    },
    inputRules: {
      validate: (value: boolean) => {
        return value;
      },
    },
  },
};

export default formFieldsProps;
