import React from 'react';

import './Select.css';

interface Props {
  name: string;
  label: string;
  reference: React.RefObject<HTMLSelectElement>;
  values: string[];
}

class Select extends React.Component<Props> {
  render() {
    const { name, label, reference, values } = this.props;
    return (
      <div className="input-block">
        <label htmlFor={name} className="label">
          {label}
        </label>
        <select name={name} id={name} ref={reference}>
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
  }
}

export default Select;
