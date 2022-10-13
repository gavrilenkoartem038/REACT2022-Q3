import React from 'react';
import { render, screen } from '@testing-library/react';

import mockCardList from 'mockData';

import CardList from './CardList';

describe('Card component', () => {
  it('render 3 cards', () => {
    render(<CardList cards={mockCardList} search="" />);
    expect(screen.getByText(/female/i)).toBeInTheDocument();
  });

  it('render cards with search', () => {
    render(<CardList cards={mockCardList} search="chris" />);
    expect(screen.getAllByText(/status/i).length).toBe(1);
  });
});
