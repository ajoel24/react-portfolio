import React from 'react';

export default function Work(props) {
  return (
    <div className={'portfolio-work'}>
      <h3>{props.title}</h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={`${props.image}`} alt={props.alt} />
      </a>
      <h4>{props.desc}</h4>
      <h4>
        Source Code:
        <a href={props.sourceURL} target="_blank" rel="noopener noreferrer">
          View In GitHub
        </a>
      </h4>
    </div>
  );
}
