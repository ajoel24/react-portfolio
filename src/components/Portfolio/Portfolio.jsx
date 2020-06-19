import React, {Fragment} from 'react';
import Work from './Work/Work';
import portfolioCompletedData from './portfolioCompletedData';
import portfolioOngoingData from './portfolioOngoingData';
import './Portfolio.css';

function Portfolio() {
  function createWork(data) {
    return (
      <Work
        key={data.id}
        title={data.title}
        image={data.image}
        link={data.link}
        alt={data.alt}
        desc={data.desc}
        sourceURL={data.sourceURL}
      />
    );
  }

  return (
    <section className={'portfolio'} id="portfolio">
      {portfolioCompletedData.length > 0 && 
        <Fragment>
          <h2 className={'portfolio-title'}>My Completed Projects</h2>
          <div className={'portfolio-container'}>
            {portfolioCompletedData.map(createWork)}
          </div>
        </Fragment>
      }
      {portfolioOngoingData.length > 0 && 
        <Fragment>
          <h2 className={'portfolio-title'}>My Ongoing Projects</h2>
          <div className={'portfolio-container'}>
            {portfolioOngoingData.map(createWork)}
          </div>
        </Fragment>
      }
    </section>
  );
}

export default Portfolio;
