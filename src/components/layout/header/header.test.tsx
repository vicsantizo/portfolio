import { screen, render } from '@testing-library/react';
import { Header } from './header';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders the Header component', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeVisible();
  });

  it('does not show navigation links by default', () => {
    render(<Header />);
    const navbar = screen.queryByRole('navigation');
    expect(navbar).toBeNull();
  });

  it('shows navigation menu when hamburger menu is clicked', async () => {
    render(<Header />);
    const hamburgerButton = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(hamburgerButton);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeVisible();
  });

  it('hides navigation when hamburger menu is clicked two times', async () => {
    render(<Header />);
    const hamburgerButton = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(hamburgerButton);
    let navbar: HTMLElement | null = screen.getByRole('navigation');
    expect(navbar).toBeVisible();

    await user.click(hamburgerButton);
    navbar = screen.queryByRole('navigation');
    expect(navbar).toBeNull();
  });
});
