import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Links() {
  return (
    <>
      <li>
        <ScrollIntoView selector="#portfolio" alignToTop={true} smooth={true}>
          <a href="#portfolio">Portfolio</a>
        </ScrollIntoView>
      </li>
      <li>
        <ScrollIntoView selector="#skills" alignToTop={true} smooth={true}>
          <a href="#skills">Skills</a>
        </ScrollIntoView>
      </li>
      <li>
        <ScrollIntoView selector="#about" alignToTop={true} smooth={true}>
          <a href="#about">About</a>
        </ScrollIntoView>
      </li>
      <li>
        <a href="/">Contact Me</a>
      </li>
    </>
  );
}
