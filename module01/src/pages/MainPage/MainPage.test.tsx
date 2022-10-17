import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockCardList } from 'mocks/mockData';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import MainPage from './MainPage';

const server = setupServer(
  rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
    req.url.searchParams.get('name');
    return res(ctx.status(200), ctx.json({ results: mockCardList }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Main page tests', () => {
  it('should show correct message with empty list of cards', () => {
    render(<MainPage />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  it('should render cards on page', async () => {
    render(<MainPage />);
    expect(await screen.findByText(/Humanoid/i)).toBeInTheDocument();
  });

  it('should render expected count of cards on page', async () => {
    render(<MainPage />);
    expect((await screen.findAllByTestId('card')).length).toEqual(3);
  });
});
