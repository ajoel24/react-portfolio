import React from 'react';

export default function Avatar(props) {
  const style = {
    borderRadius: '50%',
    border: '3px solid #fff',
    objectFit: 'cover',
    width: props.width,
    height: props.height,
    margin: '1rem 0',
  };
  return <img src={props.src} alt={props.alt} style={style} />;
}
