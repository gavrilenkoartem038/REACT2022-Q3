import React from 'react';

import './Input.css';

import { Props } from './Iput.types';

class Input extends React.Component<Props> {
  render() {
    const { type, name, label, validationField, valid, reference, onChange } = this.props;
    const getClassName = () => {
      let baseClass = 'input-block';
      if (!valid) {
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
          className={
            type === 'file'
              ? 'input w-full file:py-1 file:px-2 file:border-0 file:rounded file:bg-blue file:hover:bg-blue-hover text-white file:text-white text-black file:cursor-pointer'
              : 'input w-full'
          }
          ref={reference}
          onChange={onChange}
          data-testid={name}
        />
        <div className="validation-field">{validationField}</div>
      </div>
    );
  }
}

export default Input;
