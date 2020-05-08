import React from 'react';
import Avatar from '../Avatar/Avatar';
import SkillItem from './SkillItem/SkillItem';
import './Skills.css';

export default function Skills() {
  return (
    <section className={'skills'} id="skills">
      <h2 className={'skills-core-title'}>My Core Skillset</h2>
      <div className={'skills-core'}>
        <SkillItem
          className="fab fa-react fa-3x"
          iconColor="#fff"
          name="React"
        />
        <SkillItem
          className="fab fa-node-js fa-3x"
          iconColor="#fff"
          name="Node.js"
        />
        <div className={'skills-item'}>
          <Avatar />
          <h3>MongoDB</h3>
        </div>
        <div className={'skills-item'}>
          <Avatar />
          <h3>MongoDB</h3>
        </div>
      </div>
      <h2 className={'skills-basic-title'}>
        My Core Skills are dependent on the following skills
      </h2>
      <div className={'skills-core'}>
        <SkillItem
          className="fab fa-html5 fa-3x"
          iconColor="#fff"
          name="HTML5"
        />
        <SkillItem
          className="fab fa-css3-alt fa-3x"
          iconColor="#fff"
          name="CSS3"
        />
        <SkillItem
          className="fab fa-js fa-3x"
          iconColor="#fff"
          name="JavaScript"
        />
        <SkillItem className="fab fa-sass fa-3x" iconColor="#fff" name="Sass" />
        <SkillItem
          className="fas fa-terminal fa-3x"
          iconColor="#fff"
          name="Command Line"
        />
      </div>
      <h2 className={'skills-languages-title'}>
        I have experience with the following languages
      </h2>
      <div className={'skills-core'}>
        <SkillItem
          className="fab fa-python fa-3x"
          iconColor="#fff"
          name="Python"
        />
        <SkillItem className="fab fa-java fa-3x" iconColor="#fff" name="Java" />
        <SkillItem className="fab fa-python fa-3x" iconColor="#fff" name="C" />
        <SkillItem
          className="fab fa-python fa-3x"
          iconColor="#fff"
          name="C++"
        />
      </div>
    </section>
  );
}
