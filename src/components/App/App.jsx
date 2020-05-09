import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import About from '../About/About';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <About />
      </main>
    </>
  );
}

export default App;
