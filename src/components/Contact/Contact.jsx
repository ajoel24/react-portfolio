import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className={'contact'} id="contact">
      <h1>Let's develop awesome web projects!</h1>
      <div className={'contact-container'}>
        <div>
          <h2>My E-mail:</h2>
          <h3>
            <i className={`fas fa-envelope fa-1x`}></i>
            andrewjoel046@gmail.com
          </h3>
        </div>
        <div>
          <h2>My Phone Number:</h2>
          <h3>
            <i className={`fas fa-phone fa-1x`} aria-hidden="true"></i>
            +91 63821 83867
          </h3>
        </div>
        <div>
          <h2>You can find me on:</h2>
          <ul>
            <li>
              <a href="https://github.com/Andrew2432">
                <i className={`fab fa-github fa-2x`} aria-hidden="true"></i>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrew-joel-440a72152/">
                <i className={`fab fa-linkedin fa-2x`} aria-hidden="true"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://discordapp.com/users/502109398379003945">
                <i className={`fab fa-discord fa-2x`} aria-hidden="true"></i>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
