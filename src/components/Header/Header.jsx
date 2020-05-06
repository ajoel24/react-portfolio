import React, { useState, useEffect } from 'react';
import NavButton from './NavButton/NavButton';
import HeadLink from './HeadLink/HeadLink';
import './Header.scss';

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(
    document.documentElement.scrollTop || document.body.scrollTop
  );
  const [canChangeColor, setCanChangeColor] = useState(false);

  window.addEventListener('resize', () => setScreenSize(window.innerWidth));
  window.onscroll = () =>
    setScrollHeight(
      document.documentElement.scrollTop || document.body.scrollTop
    );

  useEffect(() => {
    if (scrollHeight >= 500) {
      setCanChangeColor(true);
    } else {
      setCanChangeColor(false);
    }
  }, [scrollHeight]);

  return (
    <header>
      <nav className={`nav ${canChangeColor && 'show'}`}>
        <div className={`nav-logo ${canChangeColor && 'show'}`}>
          <a href="/">Andrew Joel</a>
        </div>
        <div>
          {screenSize > '600' ? (
            <HeadLink scroll={canChangeColor && 'scroll'} />
          ) : (
            <NavButton scroll={canChangeColor && 'scroll'} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
