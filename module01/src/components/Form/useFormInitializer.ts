import { FieldError, useFormContext } from 'react-hook-form';
import { useAppSelector } from 'store/store';

import { FormFields } from './Form.types';
import formFieldsProps from './FormFieldProps';

const useFormFieldInitializer = () => {
  const { needValidate } = useAppSelector((state) => state.formPage);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const initializeField = (field: keyof FormFields) => {
    const fieldProps = {
      ...formFieldsProps[field].inputProps,
      needValidate,
      register: register(field, formFieldsProps[field].inputRules),
    };
    return !formFieldsProps[field]?.error
      ? fieldProps
      : { ...fieldProps, error: errors[field] as FieldError };
  };

  return initializeField;
};

export default useFormFieldInitializer;
