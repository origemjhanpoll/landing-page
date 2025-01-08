// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={styles.section}>
      <h1>About</h1>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#e0e0e0',
    paddingTop: '60px' // To account for the fixed header
  }
};

export default About;