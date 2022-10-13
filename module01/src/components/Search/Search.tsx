import React, { ChangeEvent } from 'react';

import './Search.css';

interface Props {
  search: string;
  func: (el: string) => void;
}

class Search extends React.Component<Props> {
  render() {
    const { search, func } = this.props;
    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
      return func(event.target.value);
    };

    return (
      <div className="flex justify-center pb-4 w-full">
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={onChangeSearch}
          className="p-2 w-8/12 search"
        />
      </div>
    );
  }
}

export default Search;
