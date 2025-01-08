// Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" style={styles.section}>
      <h1>Projects</h1>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#d0d0d0',
    paddingTop: '60px' // To account for the fixed header
  }
};

export default Projects;