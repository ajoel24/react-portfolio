import React from 'react';
import quizImage from '../../images/portfolio/quiz-project.jpg';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className={'portfolio'}>
      <h2 className={'portfolio-title'}>My Projects</h2>
      <div className={'portfolio-container'}>
        <div className={'portfolio-work'}>
          <h4>Quiz App</h4>
          <img src={quizImage} alt="Quiz Project"></img>
          <h5>
            A simple quiz application built using Ajax and OpenTriviaDB API
          </h5>
        </div>
      </div>
    </section>
  );
}
