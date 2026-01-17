import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      padding: '10px', 
      backgroundColor: '#333', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'center',
      gap: '20px' 
    }}>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Home</Link>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/about">About</Link>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/services">Services</Link>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;