'use client';

import { useState } from 'react';
import { Logo } from '../../ui/logo';
import { Hamburger } from '../../ui/hamburger';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import './header.css';

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <Hamburger isMenuActive={isMenuActive} action={() => setIsMenuActive(!isMenuActive)} />
      </div>
      {isMenuActive && <NavMenu />}
    </header>
  );
}

export default Header;
