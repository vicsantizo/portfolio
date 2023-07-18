import { screen, render } from '@testing-library/react';
import { server } from '@/mocks/server';
import Portfolio from './portfolio';

// Polyfill "window.fetch" used in React component
import 'whatwg-fetch';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Portfolio', () => {
  it('renders without errors', async () => {
    render(await Portfolio());
  });

  it('renders the correct number of projects', async () => {
    render(await Portfolio());
    const projects = screen.getAllByTestId('project');
    expect(projects).toHaveLength(5);
  });
});
