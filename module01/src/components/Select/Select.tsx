import React from 'react';
import './Select.css';

interface Props {
  name: string;
  label: string;
  reference: React.RefObject<HTMLSelectElement>;
  values: string[];
}

class Select extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, label, reference, values } = this.props;
    return (
      <div className="input-block">
        <label className="label">{label}</label>
        <select name={name} ref={reference}>
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
