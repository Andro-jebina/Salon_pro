import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-sticky top-0" style={{
      background: 'rgba(26, 26, 46, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{
          color: '#FF6F91',
          fontSize: '1.5rem',
          textDecoration: 'none'
        }}>
          Crystal Salon
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' }
            ].map(navItem => (
              <li className="nav-item" key={navItem.path}>
                <Link
                  className={`nav-link ${activeSection === navItem.path ? 'active' : ''}`}
                  to={navItem.path}
                  style={{
                    color: activeSection === navItem.path ? '#FF6F91' : '#fff',
                    fontWeight: '500',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {navItem.label}
                  <span style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: activeSection === navItem.path ? '100%' : '0',
                    height: '2px',
                    background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                    transition: 'width 0.3s ease'
                  }}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;