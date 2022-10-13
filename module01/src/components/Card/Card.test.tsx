import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockCardList } from 'mockData';

import Card from './Card';

const mockCard = mockCardList[0];

describe('Card component', () => {
  it('render card', () => {
    render(<Card card={mockCard} />);
    expect(screen.getByText(/humanoid/i)).toBeInTheDocument();
  });
});
