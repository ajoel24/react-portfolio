import React from 'react';
import Work from './Work/Work';
import portfolioData from './portfolioData';
import './Portfolio.css';

export default function Portfolio() {
  function createWork(data) {
    return (
      <Work
        key={data.id}
        title={data.title}
        image={data.image}
        link={data.link}
        alt={data.alt}
        desc={data.desc}
      />
    );
  }

  return (
    <section className={'portfolio'} id="portfolio">
      <h2 className={'portfolio-title'}>My Completed Projects</h2>
      <div className={'portfolio-container'}>
        {portfolioData.map(createWork)}
      </div>
      <h2 className={'portfolio-title'}>My Ongoing Projects</h2>
      <div className={'portfolio-container'}>
        {portfolioData.map(createWork)}
      </div>
    </section>
  );
}
