'use client';
import './hamburger.css';

type HamburgerProps = {
  isMenuActive: boolean;
  action: () => void;
};

export function Hamburger(props: HamburgerProps) {
  const { isMenuActive, action } = props;
  const hamburgerClasses = isMenuActive ? 'hamburger hamburger--open' : 'hamburger';
  const title = isMenuActive ? 'Close menu' : 'Show menu';

  return (
    <button className={hamburgerClasses} title={title} onClick={action}>
      <span className="hamburger__ingredient hamburger__ingredient--top"></span>
      <span className="hamburger__ingredient hamburger__ingredient--patty"></span>
      <span className="hamburger__ingredient hamburger__ingredient--bottom"></span>
    </button>
  );
}

export default Hamburger;
