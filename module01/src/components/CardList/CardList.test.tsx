import { render, screen } from '@testing-library/react';
import React from 'react';
import { CardList } from './CardList';

const data = [
  {
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
  },
  {
    id: 37,
    name: 'Beth Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (C-500A)',
      url: 'https://rickandmortyapi.com/api/location/23',
    },
    location: {
      name: 'Earth (C-500A)',
      url: 'https://rickandmortyapi.com/api/location/23',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/37.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/37',
    created: '2017-11-05T09:38:22.960Z',
  },
  {
    id: 74,
    name: 'Cop Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/74.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/74',
    created: '2017-11-30T11:48:18.950Z',
  },
];

describe('Card component', () => {
  it('render 3 cards', () => {
    render(<CardList cards={data} search={''} />);
    expect(screen.getByText(/female/i)).toBeInTheDocument();
  });

  it('render cards with search', () => {
    render(<CardList cards={data} search={'chris'} />);
    expect(screen.getAllByText(/status/i).length).toBe(1);
  });
});
