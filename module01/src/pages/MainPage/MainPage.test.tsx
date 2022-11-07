import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import server from 'mocks/server';
import { Store } from 'store/store';

import MainPage from './MainPage';

const newServer = server;
beforeAll(() => newServer.listen());
afterEach(() => newServer.resetHandlers());
afterAll(() => newServer.close());

describe('Main page tests', () => {
  it('should render search input', () => {
    render(<MainPage />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  it('should render cards on page', async () => {
    render(
      <Store>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Store>
    );
    expect(await screen.findByText(/frodo/i)).toBeInTheDocument();
  });

  it('should render expected count of cards on page', async () => {
    render(
      <Store>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Store>
    );
    expect((await screen.findAllByTestId('card')).length).toEqual(3);
  });
});
