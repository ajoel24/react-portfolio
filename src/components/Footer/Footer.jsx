import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <h2>&copy; {new Date().getFullYear()}. All rights reserved.</h2>
      <h2>
        Developed with 🤍 by <a href="https://github.com/Andrew2432">Andrew</a>
      </h2>
    </footer>
  );
}

export default Footer;
