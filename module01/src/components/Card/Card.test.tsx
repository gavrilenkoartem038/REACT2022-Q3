import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import React from 'react';

const data = {
  id: 65,
  name: 'Chris',
  status: 'Alive',
  species: 'Humanoid',
  type: 'Microverse inhabitant',
  gender: 'Male',
  origin: {
    name: "Rick's Battery Microverse",
    url: 'https://rickandmortyapi.com/api/location/24',
  },
  location: {
    name: "Rick's Battery Microverse",
    url: 'https://rickandmortyapi.com/api/location/24',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/65.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/17'],
  url: 'https://rickandmortyapi.com/api/character/65',
  created: '2017-11-30T11:02:41.935Z',
};

describe('Card component', () => {
  it('render card', () => {
    render(<Card {...data} />);
    expect(screen.getByText(/humanoid/i)).toBeInTheDocument();
  });
});
