/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';

import { mockCardList } from './mockData';

const server = setupServer(
  rest.get(`https://the-one-api.dev/v2/character`, (req, res, ctx) => {
    req.url.searchParams.get('name');
    req.url.searchParams.get('sort');
    req.url.searchParams.get('limit');
    req.url.searchParams.get('page');
    return res(ctx.status(200), ctx.json({ docs: mockCardList, pages: 1, limit: 20, page: 1 }));
  })
);

export default server;
