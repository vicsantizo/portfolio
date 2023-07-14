import { Logo } from './logo';
import { screen, render } from '@testing-library/react';

describe('Logo', () => {
  it('renders the component', () => {
    render(<Logo />);
  });

  it("directs to main page when the logo's link is clicked", () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
