import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Links() {
  return (
    <>
      <li>
        <ScrollIntoView selector="#portfolio">
          <a href="#portfolio">Portfolio</a>
        </ScrollIntoView>
      </li>
      <li>
        <a href="/">Skills</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact Me</a>
      </li>
    </>
  );
}
