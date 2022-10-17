import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockCardList } from 'mocks/mockData';

import Card from './Card';

const mockCard = mockCardList[0];

describe('Card component', () => {
  it('should render card', () => {
    render(<Card card={mockCard} />);
    expect(screen.getByText(/humanoid/i)).toBeInTheDocument();
  });

  it('should open modal window on click card', () => {
    render(<Card card={mockCard} />);
    const card = screen.getByTestId('card');
    const modal = screen.getByTestId('modal');
    userEvent.click(card);
    expect(modal.classList.contains('active')).toBe(true);
  });

  it('should close modal window on click screen', () => {
    render(<Card card={mockCard} />);
    const card = screen.getByTestId('card');
    const modal = screen.getByTestId('modal');
    userEvent.click(card);
    userEvent.click(modal);
    expect(modal.classList.contains('active')).toBe(false);
  });

  it('should noy close modal window on click modal content', () => {
    render(<Card card={mockCard} />);
    const card = screen.getByTestId('card');
    const modal = screen.getByTestId('modal');
    const modalContent = screen.getByTestId('modal-content');
    userEvent.click(card);
    userEvent.click(modalContent);
    expect(modal.classList.contains('active')).toBe(true);
  });
});
