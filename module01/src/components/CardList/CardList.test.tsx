import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockCardList } from 'mocks/mockData';

import CardList from './CardList';

describe('Card component', () => {
  it('card from cardList data should be at the page', () => {
    render(<CardList cards={mockCardList} />);
    expect(screen.getByText(/female/i)).toBeInTheDocument();
  });

  it('should render 3 cards', () => {
    render(<CardList cards={mockCardList} />);
    expect(screen.getAllByText(/status/i).length).toBe(3);
  });

  it('should render "not found message with empty list of curds"', () => {
    render(<CardList cards={[]} />);
    expect(screen.getByText(/Cards not found/i)).toBeInTheDocument();
  });
});
