import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockCardList } from 'mockData';

import CardList from './CardList';

describe('Card component', () => {
  it('render cards', () => {
    render(<CardList cards={mockCardList} />);
    expect(screen.getByText(/female/i)).toBeInTheDocument();
  });

  it('render 3 cards ', () => {
    render(<CardList cards={mockCardList} />);
    expect(screen.getAllByText(/status/i).length).toBe(3);
  });
});
