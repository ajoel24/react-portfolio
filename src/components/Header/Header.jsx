import React, { useState } from 'react';
import NavButton from './NavButton/NavButton';
import HeadLink from './HeadLink/HeadLink';
import './Header.scss';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => setScreenSize(window.innerWidth));

  return (
    <header>
      <nav className={'nav'}>
        <div className={'nav-logo'}>
          <a href="/">Andrew Joel</a>
        </div>
        <div>{screenSize > '600' ? <HeadLink /> : <NavButton />}</div>
      </nav>
    </header>
  );
};

export default Header;
