import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>Sobre</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projetos</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed' as 'fixed',
    top: 0,
    width: '100%',
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center' as 'center',
    zIndex: 1000
  },
  navList: {
    listStyle: 'none' as 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  }
};

export default Header;