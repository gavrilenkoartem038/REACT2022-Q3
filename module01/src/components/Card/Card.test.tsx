import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { mockCardList } from 'mocks/mockData';

import Card from './Card';

const mockCard = mockCardList[0];
const mockCardWithEmptyFields = mockCardList[2];

describe('Card component', () => {
  it('should render card', () => {
    render(
      <BrowserRouter>
        <Card card={mockCard} />
      </BrowserRouter>
    );
    expect(screen.getByText(/frodo/i)).toBeInTheDocument();
  });

  it('should render card with "Unknown" value of fields race and gender if that fields empty', () => {
    render(
      <BrowserRouter>
        <Card card={mockCardWithEmptyFields} />
      </BrowserRouter>
    );
    expect(screen.getAllByText(/Unknown/i)).toHaveLength(2);
    screen.debug();
  });

  // it('should open modal page on click card', async () => {
  //   render(
  //     <Store>
  //       <BrowserRouter>
  //         <Card card={mockCard} />
  //       </BrowserRouter>
  //     </Store>
  //   );
  //   const card = screen.getByTestId('card');
  //   userEvent.click(card);
  //   expect(await screen.findByText(/brown/i)).toBeInTheDocument();
  // });

  // it('should close modal window on click screen', () => {
  //   render(<Card card={mockCard} />);
  //   const card = screen.getByTestId('card');
  //   const modal = screen.getByTestId('modal');
  //   userEvent.click(card);
  //   userEvent.click(modal);
  //   expect(modal.classList.contains('active')).toBe(false);
  // });

  // it('should not close modal window on click modal content', () => {
  //   render(<Card card={mockCard} />);
  //   const card = screen.getByTestId('card');
  //   const modal = screen.getByTestId('modal');
  //   const modalContent = screen.getByTestId('modal-content');
  //   userEvent.click(card);
  //   userEvent.click(modalContent);
  //   expect(modal.classList.contains('active')).toBe(true);
  // });
});
