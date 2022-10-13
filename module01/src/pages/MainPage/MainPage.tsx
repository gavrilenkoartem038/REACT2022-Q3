import React from 'react';

import CardList from 'components/CardList/CardList';
import Search from 'components/Search/Search';
import { ICard } from 'types/types';

interface State {
  cards: ICard[];
  search: string;
}

class MainPage extends React.Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      cards: [] as State['cards'],
      search: localStorage.getItem('search') || '',
    };
  }

  componentDidMount(): void {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data.results }));
  }

  componentWillUnmount(): void {
    const { search } = this.state;
    localStorage.setItem('search', search);
  }

  render() {
    const { cards, search } = this.state;
    const searchCard = (searchStr: string) => {
      return this.setState({ search: searchStr });
    };

    return (
      <>
        <Search search={search} func={searchCard} />
        <CardList cards={cards} search={search} />
      </>
    );
  }
}

export default MainPage;
