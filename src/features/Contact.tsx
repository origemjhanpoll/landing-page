// Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={styles.section}>
      <h1>Contact</h1>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#c0c0c0',
    paddingTop: '60px' // To account for the fixed header
  }
};

export default Contact;