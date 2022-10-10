import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from './MainPage';
import userEvent from '@testing-library/user-event';

describe('Main page tests', () => {
  it('test correct search work with empty list of cards', () => {
    render(<MainPage />);
    userEvent.type(screen.getByRole('textbox'), 'rid');
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
