import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  type: string;
  name: string;
  label: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  needValidate: boolean;
}
