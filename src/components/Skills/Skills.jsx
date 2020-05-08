import React from 'react';
import SkillItem from './SkillItem/SkillItem';
import skillsCore from './skillsCore';
import skillsBasic from './skillsBasic';
import skillsLanguages from './skillsLanguages';
import './Skills.css';

export default function Skills() {
  function createSkillItem(data) {
    return (
      <SkillItem
        key={data.id}
        name={data.name}
        className={data.className}
        iconColor={data.iconColor}
      />
    );
  }

  return (
    <section className={'skills'} id="skills">
      <h1 className={'skills-title'}>My Skills</h1>
      <h2>My Core Skillset</h2>
      <div className={'skills-container'}>
        {skillsCore.map(createSkillItem)}
      </div>
      <h2 className={'skills-basic-title'}>
        Skills that are fundamental for my work
      </h2>
      <div className={'skills-container'}>
        {skillsBasic.map(createSkillItem)}
      </div>
      <h2 className={'skills-languages-title'}>
        I have university level experience with the following languages
      </h2>
      <div className={'skills-container'}>
        {skillsLanguages.map(createSkillItem)}
      </div>
    </section>
  );
}
