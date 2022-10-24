/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import './Select.css';

export interface SelectProps {
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  values: string[];
}

const Select = (props: SelectProps) => {
  const { name, label, register, values } = props;
  return (
    <div className="input-block">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select id={name} {...register}>
        {values.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
