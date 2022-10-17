import React from 'react';
import { render, screen } from '@testing-library/react';

import MainPage from './MainPage';

describe('Main page tests', () => {
  it('should show correct message with empty list of cards', () => {
    render(<MainPage />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
});
