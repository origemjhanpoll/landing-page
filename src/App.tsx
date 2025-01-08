import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './feature/Home';
import About from './feature/About';
import Projects from './feature/Projects';
import Contact from './feature/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;