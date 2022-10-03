import React from 'react';

class Search extends React.Component<{ search: string; func: (el: string) => void }> {
  constructor(props: { search: string; func: (el: string) => void }) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center pb-4 w-full">
        <input
          type="text"
          value={this.props.search}
          placeholder="Search..."
          onChange={(e) => this.props.func(e.target.value)}
          className="p-2 w-8/12"
        />
      </div>
    );
  }
}

export { Search };
