import { render, screen } from '@testing-library/react';
import { Hamburger } from './hamburger';
import userEvent from '@testing-library/user-event';

const mockAction = jest.fn();

describe('Hamburger', () => {
  it('renders the component', () => {
    render(<Hamburger isMenuActive={false} action={mockAction} />);
    const hamburger = screen.getByRole('button');
    expect(hamburger).toBeInTheDocument();
  });

  it("has a title attribute that describes the hamburger's action", () => {
    render(<Hamburger isMenuActive={false} action={mockAction} />);
    const hamburger = screen.getByRole('button');
    expect(hamburger).toHaveAttribute('title');
  });

  it('calls the action when the button is clicked', async () => {
    render(<Hamburger isMenuActive={false} action={mockAction} />);
    const hamburger = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(hamburger);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
