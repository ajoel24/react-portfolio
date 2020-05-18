import React, { useState } from 'react';
import Links from '../Links/Links';

function NavButton(props) {
  const [sideBar, setSideBar] = useState(false);

  function toggleSidebar() {
    setSideBar(!sideBar);
  }

  return (
    <div className={`nav-wrap ${props.scroll}`}>
      <div
        className={`nav-button ${sideBar || props.hide}`}
        onClick={toggleSidebar}
      >
        <span className={`nav-button-line ${sideBar && 'show'}`}></span>
      </div>
      <div
        className={`nav-sidebar ${sideBar && 'show'}`}
        onClick={toggleSidebar}
      >
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

export default NavButton;
