import React from 'react';
import { render, screen } from '@testing-library/react';
import { PersconCard } from 'types/types';
import { PersonCardList } from './PersonCardList';

describe('PersonCardList tests', () => {
  const cards: PersconCard[] = [
    {
      name: 'Vasya',
      surname: 'Sidorov',
      date: '2002-09-07',
      country: 'BY',
      file: './avatar.png',
    },
    {
      name: 'Pasha',
      surname: 'Maksimenko',
      date: '1991-01-01',
      country: 'LT',
      file: './image.img',
    },
  ];

  it('render card list', () => {
    render(<PersonCardList cards={cards} />);

    const name = screen.getByText(/vasya/i);
    expect(name).toBeInTheDocument();
  });

  it('renders CardsForm', () => {
    render(<PersonCardList cards={cards} />);

    const personCards = screen.queryAllByTestId('person-card');
    expect(personCards).toHaveLength(2);
  });
});
