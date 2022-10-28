import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { mockCardList } from 'mocks/mockData';

import CardList from './CardList';

describe('Card component', () => {
  it('card from cardList data should be at the page', () => {
    render(
      <BrowserRouter>
        <CardList cards={mockCardList} isErrorRequest={false} />
      </BrowserRouter>
    );
    expect(screen.getByText(/frodo/i)).toBeInTheDocument();
  });

  it('should render 3 cards', () => {
    render(
      <BrowserRouter>
        <CardList cards={mockCardList} isErrorRequest={false} />
      </BrowserRouter>
    );
    expect(screen.getAllByText(/race/i).length).toBe(3);
  });

  it('should render "not found message with empty list of curds"', () => {
    render(<CardList cards={[]} isErrorRequest={false} />);
    expect(screen.getByText(/Cards not found/i)).toBeInTheDocument();
  });
});
