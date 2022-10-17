import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockPersonCards } from 'mocks/mockData';

import PersonCardList from './PersonCardList';

describe('PersonCardList tests', () => {
  it('should render card list', () => {
    render(<PersonCardList cards={mockPersonCards} />);

    const name = screen.getByText(/vasya/i);
    expect(name).toBeInTheDocument();
  });

  it('should renders card list with correct length', () => {
    render(<PersonCardList cards={mockPersonCards} />);

    const personCards = screen.queryAllByTestId('person-card');
    expect(personCards).toHaveLength(2);
  });
});
