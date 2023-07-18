import { rest } from 'msw';
import { portfolioProjectsMock } from './data.ts';

export const handlers = [
  rest.get('http://localhost:3000/api/github', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(portfolioProjectsMock));
  }),
];
