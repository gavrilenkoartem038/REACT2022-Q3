import React from 'react';
import { render, screen } from '@testing-library/react';

import MainPage from './MainPage';

describe('Main page tests', () => {
  it('test search on page', () => {
    render(<MainPage />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
});
