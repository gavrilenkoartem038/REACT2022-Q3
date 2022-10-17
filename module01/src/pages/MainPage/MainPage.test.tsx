import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainPage from './MainPage';

describe('Main page tests', () => {
  it('should show correct message with empty list of cards', () => {
    render(<MainPage />);
    userEvent.type(screen.getByRole('textbox'), 'rid');
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
