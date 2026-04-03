import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-5" style={{ background: '#F8F9FF' }}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>Contact Us</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="contact-info">
                <h5 className="fw-bold mb-3" style={{ color: '#6C63FF' }}>Address</h5>
                <p style={{ color: '#555' }}>123 Beauty Street<br />Crystal City, CC 12345</p>
                <h5 className="fw-bold mb-3 mt-4" style={{ color: '#6C63FF' }}>Opening Hours</h5>
                <p style={{ color: '#555' }}>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
                <h5 className="fw-bold mb-3 mt-4" style={{ color: '#6C63FF' }}>Phone</h5>
                <p style={{ color: '#555' }}>+91 98765 43210</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-placeholder" style={{
                height: '300px',
                background: '#fff',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #6C63FF'
              }}>
                <span style={{ color: '#6C63FF', fontWeight: 'bold' }}>Google Maps Embed Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-3" style={{ background: '#1A1A2E', color: '#F8F9FF' }}>
        <div className="container text-center">
          <p>&copy; 2024 Crystal Salon. All rights reserved.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/919876543210"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          background: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        💬
      </a>

      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
          border: 'none',
          borderRadius: '50%',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(108, 99, 255, 0.4)',
          zIndex: 1000,
          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.3s ease'
        }}
      >
        ↑
      </button>
    </>
  );
};

export default Footer;