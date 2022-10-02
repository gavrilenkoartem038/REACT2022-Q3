import { CardList } from 'conponents/CardList';
import { Search } from 'conponents/Search';
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
      <main className="container mx-auto p-4 bg-slate-200">
        <Search search={search} func={(search) => this.setState({ search: search })} />
        <CardList {...{ cards, search }} />
      </main>
    );
  }
}

export { MainPage };
