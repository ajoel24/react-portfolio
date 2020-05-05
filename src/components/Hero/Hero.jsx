import React from 'react';
import hero_image from '../../images/hero.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className={'hero'}>
      <img src={hero_image} alt="Programmer hero for website" />
    </section>
  );
}
