import React from 'react';
import quizImage from '../../images/portfolio/quiz-project.jpg';
import Work from './Work/Work';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className={'portfolio'} id="portfolio">
      <h2 className={'portfolio-title'}>My Completed Projects</h2>
      <div className={'portfolio-container'}>
        <Work
          title="Quiz Project"
          image={quizImage}
          link="https://quizproject.netlify.app"
          alt="Quiz Project"
          desc="A simple quiz project developed using ES6 JS and OpenTriviaDB API"
        />
        <Work
          title="Quiz Project"
          image={quizImage}
          link="https://quizproject.netlify.app"
          alt="Quiz Project"
          desc="A simple quiz project developed using ES6 JS and OpenTriviaDB API"
        />
        <Work
          title="Quiz Project"
          image={quizImage}
          link="https://quizproject.netlify.app"
          alt="Quiz Project"
          desc="A simple quiz project developed using ES6 JS and OpenTriviaDB API"
        />
        <Work
          title="Quiz Project"
          image={quizImage}
          link="https://quizproject.netlify.app"
          alt="Quiz Project"
          desc="A simple quiz project developed using ES6 JS and OpenTriviaDB API"
        />
      </div>
    </section>
  );
}
