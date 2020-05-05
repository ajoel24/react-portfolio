import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className={'nav'}>
        <div className={'nav-logo'}>Andrew Joel</div>
        <div>
          <ul className={'nav-links'}>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
