import React, { useState } from 'react';
import Links from './Links/Links';
import NavButton from './NavButton/NavButton';
import './Header.css';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => setScreenSize(window.innerWidth));

  return (
    <header>
      <nav className={'nav'}>
        <div className={'nav-logo'}>
          <a href="/">Andrew Joel</a>
        </div>
        <div>
          {screenSize > '600' ? (
            <ul className={'nav-links'}>
              <Links />
            </ul>
          ) : (
            <NavButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
