import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import Avatar from '../Avatar/Avatar';
import profileImage from '../../images/dp.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className={'hero'}>
      <div className={'container hero-content'}>
        <h1 className={'hero-content-title'}>Hello! I'm Andrew Joel</h1>
        <Avatar
          src={profileImage}
          alt="Andrew Joel profile"
          width="200px"
          height="200px"
        />

        <p>
          I am a <strong>MERN Stack Web Developer</strong> from Chennai, India.
          I develop beautiful, robust websites by applying latest web
          development skills. All of my projects are 100% compliant with web
          standards.
        </p>

        <ScrollIntoView selector="#portfolio" alignToTop={true} smooth={true}>
          <button className={`btn btn-hero`}>
            <i className={`fas fa-chevron-down fa-1x`} aria-hidden="true"></i>
            See My Work
          </button>
        </ScrollIntoView>
      </div>
    </section>
  );
}
