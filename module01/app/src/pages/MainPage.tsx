import { Card } from 'conponents/Card';
import React from 'react';
import { ICard, nullCard } from 'types.tsx/types';

class MainPage extends React.Component<
  Record<string, unknown>,
  { items: ICard[]; search: string }
> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      items: [nullCard],
      search: localStorage.getItem('search') || '',
    };
  }

  componentDidMount(): void {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => this.setState({ items: data.results }));
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.search);
  }

  render() {
    const cards = this.state.items;
    const search = this.state.search;
    return (
      <main className="container mx-auto">
        <input
          type="text"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <div className="container flex flex-wrap gap-4">
          {cards
            .filter((card) =>
              search ? card.name.toLowerCase().includes(search.toLowerCase()) : card
            )
            .map((card) => (
              <Card {...card} key={card.id} />
            ))}
        </div>
      </main>
    );
  }
}

export { MainPage };
