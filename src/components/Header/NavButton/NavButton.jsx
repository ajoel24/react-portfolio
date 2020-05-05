import React, { Fragment, useState } from 'react';
import './NavButton.css';

export default function NavButton() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSidebar() {
    setSideBar(!sideBar);
  }
  return (
    <Fragment>
      <div className={`nav-button`} onClick={toggleSidebar}>
        <span className={`nav-button-line ${sideBar && 'show'}`}></span>
      </div>
    </Fragment>
  );
}
