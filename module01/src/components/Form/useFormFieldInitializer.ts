import { FieldError, useFormContext } from 'react-hook-form';

import { FormFields } from './Form.types';
import formFieldsProps from './formFieldsProps';

const useFormFieldInitializer = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const initializeField = (field: keyof FormFields) => {
    const fieldProps = {
      ...formFieldsProps[field].inputProps,
      register: register(field, formFieldsProps[field].inputRules),
    };
    return !formFieldsProps[field]?.error
      ? fieldProps
      : { ...fieldProps, error: errors[field] as FieldError };
  };

  return initializeField;
};

export default useFormFieldInitializer;
