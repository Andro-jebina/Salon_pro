import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center position-relative overflow-hidden" style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
      position: 'relative'
    }}>
      <div className="parallax-bg position-absolute w-100 h-100" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0.3',
        zIndex: 1
      }}></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="hero-content animate-fade-in">
          <h1 className="display-1 fw-bold mb-3" style={{
            color: '#fff',
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
            fontSize: '4rem'
          }}>
            Crystal Salon
          </h1>
          <p className="lead mb-4" style={{
            color: '#fff',
            fontSize: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontWeight: '300'
          }}>
            Where Beauty Meets Elegance
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/services" className="btn btn-lg px-5 py-3" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid #fff',
              borderRadius: '50px',
              color: '#fff',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}>
              Explore Services
            </Link>
            <Link to="/booking" className="btn btn-lg px-5 py-3" style={{
              background: '#fff',
              border: 'none',
              borderRadius: '50px',
              color: '#6C63FF',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}>
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 2 }}>
        <div className="d-flex flex-column align-items-center" style={{ color: '#fff', opacity: 0.8 }}>
          <span className="mb-2" style={{ fontSize: '0.9rem' }}>Scroll Down</span>
          <div style={{
            width: '2px',
            height: '40px',
            background: '#fff',
            borderRadius: '1px',
            animation: 'bounce 2s infinite'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;