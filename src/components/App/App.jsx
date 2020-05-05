import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
      </main>
    </Fragment>
  );
}

export default App;
