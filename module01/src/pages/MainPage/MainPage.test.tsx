import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from './MainPage';
import userEvent from '@testing-library/user-event';

describe('Main page tests', () => {
  // it('render main page', async () => {
  //   render(<MainPage />);
  //   expect(await screen.findByText(/sanchez/i)).toBeInTheDocument();
  //   expect(screen.getAllByText(/status/i).length).toBe(20);
  // });

  // it('test correct search work', async () => {
  //   render(<MainPage />);
  //   userEvent.type(screen.getByRole('textbox'), 'ri');
  //   expect(await screen.findByText(/sanchez/i)).toBeInTheDocument();
  //   expect(screen.getAllByText(/status/i).length).toBe(5);
  // });

  it('test correct search work with empty list of cards', () => {
    render(<MainPage />);
    userEvent.type(screen.getByRole('textbox'), 'rid');
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
