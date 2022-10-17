import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';

describe('roter and render pages', () => {
  test('should renders main page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should go to about page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/about us/i));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  test('should go to 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/fdsfdsds']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 page/i)).toBeInTheDocument();
  });
});
