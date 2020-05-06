import React from 'react';
import Links from '../Links/Links';

export default function HeadLink(props) {
  return (
    <ul className={`nav-links ${props.scroll}`}>
      <Links />
    </ul>
  );
}
