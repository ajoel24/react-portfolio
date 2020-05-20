import React from 'react';

function Avatar(props) {
  const style = {
    borderRadius: '50%',
    border: `5px solid ${props.borderColor}`,
    objectFit: 'cover',
    width: props.width,
    height: props.height,
    margin: '1rem 0',
  };
  return <img src={props.src} alt={props.alt} style={style} />;
}

export default Avatar;
