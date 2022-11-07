/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import './Select.css';

export interface SelectProps {
  name: string;
  label: string;
  register?: UseFormRegisterReturn;
  values: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  testId?: string;
}

const Select = (props: SelectProps) => {
  const { name, label, register, values, value, onChange, testId } = props;
  return (
    <div className="input-block">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        {...register}
        onChange={onChange}
        data-testid={testId}
      >
        {values.map((optionValue) => {
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
