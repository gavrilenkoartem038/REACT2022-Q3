import React, { ChangeEvent, FormEvent } from 'react';

import './Search.css';

interface Props {
  func: (el: string) => void;
}

interface State {
  value: string;
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: localStorage.getItem('search') || '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { func } = this.props;
    const { value } = this.state;
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      localStorage.setItem('search', value);
      return func(value);
    };

    return (
      <div className="flex justify-center pb-4 w-full">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={this.onChange}
            placeholder="Search..."
            className="p-2 w-8/12 search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
