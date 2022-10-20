import React from 'react';

import './Select.css';

interface Props {
  name: string;
  label: string;
  reference: React.RefObject<HTMLSelectElement>;
  values: string[];
}

function Select(props: Props) {
  const { name, label, reference, values } = props;
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

export default Select;
