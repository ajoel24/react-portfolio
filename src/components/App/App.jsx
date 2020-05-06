import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Portfolio />
      </main>
    </Fragment>
  );
}

export default App;
