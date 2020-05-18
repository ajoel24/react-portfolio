import React from 'react';

function SkillItem(props) {
  return (
    <div className={'skills-item'}>
      <i
        className={`${props.className}`}
        style={{ color: `${props.iconColor}`, margin: '0 auto' }}
      ></i>
      <h3>{props.name}</h3>
    </div>
  );
}

export default SkillItem;
