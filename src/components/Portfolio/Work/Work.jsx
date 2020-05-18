import React from 'react';

function Work(props) {
  return (
    <div className={'portfolio-work'}>
      <h3>{props.title}</h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={`${props.image}`} alt={props.alt} />
      </a>
      <h4>{props.desc}</h4>
      <div className={'portfolio-work-action'}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className={`btn-demo`}>
            <i className={`far fa-play-circle`}></i>
            Live Demo
          </button>
        </a>

        <a href={props.sourceURL} target="_blank" rel="noopener noreferrer">
          <button className={`btn-github`}>
            <i className={`fab fa-github`}></i>
            View in GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Work;
