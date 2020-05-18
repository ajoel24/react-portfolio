import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import Avatar from '../Avatar/Avatar';
import profileImage from '../../images/compressed/dp.webp';
import './Hero.css';

function Hero() {
  return (
    <section className={'hero'}>
      <div className={'container hero-content'}>
        <h1 className={'hero-content-title'}>Hello! I'm Andrew Joel</h1>
        <Avatar
          src={profileImage}
          alt="Andrew Joel profile"
          width="200px"
          height="200px"
          borderColor="#fff"
        />

        <p>
          I am a <strong>MERN Stack Web Developer</strong> from Chennai, India.
          I develop beautiful, robust websites by applying latest web
          development skills. My projects are compliant with web standards.
        </p>

        <ScrollIntoView selector="#portfolio" alignToTop={true} smooth={true}>
          <button className={`btn-hero`}>
            <i className={`fas fa-chevron-down fa-1x`} aria-hidden="true"></i>
            Sounds Good
          </button>
        </ScrollIntoView>

        <ScrollIntoView selector="#contact" alignToTop={true} smooth={true}>
          <button className={`btn-work`}>
            <i className={`fas fa-code fa-1x`} aria-hidden="true"></i>
            I'm available for work!
          </button>
        </ScrollIntoView>
      </div>
    </section>
  );
}

export default Hero;
