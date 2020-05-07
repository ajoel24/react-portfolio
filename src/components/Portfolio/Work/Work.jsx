import React from 'react';

export default function Work(props) {
  return (
    <div className={'portfolio-work'}>
      <h4>{props.title}</h4>
      <a href={props.link}>
        <img src={props.image} alt={props.alt} />
      </a>
      <h5>{props.desc}</h5>
    </div>
  );
}
