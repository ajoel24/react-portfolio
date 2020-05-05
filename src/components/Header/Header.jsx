import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <nav className={'nav'}>
        <div className={'logo'}>Andrew Joel</div>
        <div>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
