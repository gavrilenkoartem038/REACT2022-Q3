import React from 'react';

import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import Search from 'components/Search/Search';
import { ICard } from 'types/types';

interface State {
  cards: ICard[];
  isPending: boolean;
  isErrorRequest: boolean;
}

class MainPage extends React.Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      cards: [] as State['cards'],
      isPending: false,
      isErrorRequest: false,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount(): void {
    const search: string = localStorage.getItem('search') || '';
    this.getData(search);
  }

  getData(searchStr: string) {
    this.setState({ isPending: true });
    const url = `https://rickandmortyapi.com/api/character?name=${searchStr}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ cards: data.results, isPending: false, isErrorRequest: false })
      )
      .catch(() => this.setState({ cards: [], isErrorRequest: true, isPending: false }));
  }

  render() {
    const { cards, isPending, isErrorRequest } = this.state;
    return (
      <>
        <Search func={this.getData} />
        {isPending ? <Loader /> : <CardList cards={cards} isErrorRequest={isErrorRequest} />}
      </>
    );
  }
}

export default MainPage;
