import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockCardList } from 'mockData';

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
});
