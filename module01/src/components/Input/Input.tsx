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
    return (
      <div className={valid ? 'input-block' : 'input-block invalid'}>
        <label className="label">{label}</label>
        <input type={type} name={name} className="input" ref={reference} onChange={onChange} />
        <div className="validation-field">{validationField}</div>
      </div>
    );
  }
}

export default Input;
