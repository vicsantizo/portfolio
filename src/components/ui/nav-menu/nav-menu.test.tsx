import { render, screen } from '@testing-library/react';
import NavMenu from './nav-menu';

describe('NavMenu', () => {
  it('renders the navigation menu', () => {
    render(<NavMenu />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
    const listItems = screen.getAllByRole('link');
    expect(listItems.length).toBe(4);
  });

  it('renders the correct links with the expected href', () => {
    render(<NavMenu />);
    const links = screen.getAllByRole('link');
    const expectedLinks = [{ href: '/projects' }, { href: '/tech' }, { href: '/about' }, { href: '/contact' }];
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedLinks[index].href);
    });
  });
});
