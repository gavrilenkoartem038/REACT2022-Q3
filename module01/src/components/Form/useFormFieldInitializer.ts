import { useContext } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { Context } from 'store/store';

import { FormFields } from './Form.types';
import formFieldsProps from './formFieldsProps';

const useFormFieldInitializer = () => {
  const { state } = useContext(Context);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const initializeField = (field: keyof FormFields) => {
    const fieldProps = {
      ...formFieldsProps[field].inputProps,
      needValidate: state.formPage.needValidate,
      register: register(field, formFieldsProps[field].inputRules),
    };
    return !formFieldsProps[field]?.error
      ? fieldProps
      : { ...fieldProps, error: errors[field] as FieldError };
  };

  return initializeField;
};

export default useFormFieldInitializer;
