import React from 'react';

class Search extends React.Component<{ search: string; func: (el: string) => void }> {
  constructor(props: { search: string; func: (el: string) => void }) {
    super(props);
  }

  render() {
    return (
      <div className="pb-4">
        <input
          type="text"
          value={this.props.search}
          onChange={(e) => this.props.func(e.target.value)}
        />
      </div>
    );
  }
}

export { Search };
