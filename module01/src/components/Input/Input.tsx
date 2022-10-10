import React from 'react';
import './Input.css';

interface Props {
  type?: string;
  name: string;
  label?: string;
  validationField?: string;
  valid: boolean;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { type = 'text', name, label, validationField, valid, reference, onChange } = this.props;
    const className = () => {
      let initClass = 'input-block';
      if (type === 'checkbox') {
        initClass += ' checkbox';
      }
      if (type === 'file') {
        initClass += ' file:border-0';
      }
      if (!valid) {
        initClass += ' invalid';
      }
      return initClass;
    };
    return (
      <div className={className()}>
        <label className="label">{label}</label>
        <input
          type={type}
          name={name}
          className={
            type === 'file'
              ? 'input w-full file:border-0 file:bg-blue file:hover:bg-blue-hover text-white file:py-1 file:px-2 file:text-white text-black file:rounded file:cursor-pointer'
              : 'input w-full'
          }
          ref={reference}
          onChange={onChange}
        />
        <div className="validation-field">{validationField}</div>
      </div>
    );
  }
}

export default Input;
