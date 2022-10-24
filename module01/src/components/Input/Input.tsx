/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import './Input.css';

import { InputProps } from './Iput.types';

const Input = (props: InputProps) => {
  const { type, name, label, error, errorMessage, register, needValidate } = props;
  const getClassName = () => {
    let baseClass = 'input-block';
    if (error && needValidate) {
      baseClass = `${baseClass} invalid`;
    }

    switch (type) {
      case 'checkbox':
        return `${baseClass} checkbox`;
      case 'file':
        return `${baseClass} file:border-0`;
      default:
        return baseClass;
    }
  };
  return (
    <div className={getClassName()}>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        data-testid={name}
        className={
          type === 'file'
            ? 'input w-full file:py-1 file:px-2 file:border-0 file:rounded file:bg-blue file:hover:bg-blue-hover text-white file:text-white text-black file:cursor-pointer'
            : 'input w-full'
        }
        {...register}
      />
      <div className="validation-field">{error && (error.message || errorMessage)}</div>
    </div>
  );
};

export default Input;
