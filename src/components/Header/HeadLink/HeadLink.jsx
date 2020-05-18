import React from 'react';
import Links from '../Links/Links';

function HeadLink(props) {
  return (
    <ul className={`nav-links ${props.scroll}`}>
      <Links />
    </ul>
  );
}

export default HeadLink;
