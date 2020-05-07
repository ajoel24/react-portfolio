import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
