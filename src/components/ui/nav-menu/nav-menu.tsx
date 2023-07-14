import Link from 'next/link';
import './nav-menu.css';

export function NavMenu() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/projects/" className="nav__link">
            Personal Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/tech" className="nav__link">
            Languages, tools & more
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
