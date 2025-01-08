import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './features/Home';
import About from './features/About';
import Projects from './features/Projects';
import Contact from './features/Contact';

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