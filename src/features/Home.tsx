// Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" style={styles.section}>
      <h1>Home</h1>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f0f0',
    paddingTop: '60px' // To account for the fixed header
  }
};

export default Home;