import React, { useState } from 'react';
import Links from '../Links/Links';
import './NavButton.css';

export default function NavButton() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSidebar() {
    setSideBar(!sideBar);
  }
  return (
    <div className={'nav-wrap'}>
      <div className={`nav-button`} onClick={toggleSidebar}>
        <span className={`nav-button-line ${sideBar && 'show'}`}></span>
      </div>
      <div className={`nav-sidebar ${sideBar && 'show'}`}>
        <div className={`nav-sidebar-inner ${sideBar && 'show'}`}>
          <div className={`nav-sidebar-inner-inner ${sideBar && 'show'}`}>
            <ul>
              <Links />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
