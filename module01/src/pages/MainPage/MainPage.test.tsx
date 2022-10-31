import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { mockCardList } from 'mocks/mockData';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Store } from 'store/store';

import MainPage from './MainPage';

const server = setupServer(
  rest.get(`https://the-one-api.dev/v2/character`, (req, res, ctx) => {
    req.url.searchParams.get('name');
    req.url.searchParams.get('sort');
    req.url.searchParams.get('limit');
    req.url.searchParams.get('page');
    return res(ctx.status(200), ctx.json({ docs: mockCardList, pages: 1, limit: 20, page: 1 }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
