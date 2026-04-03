import React from 'react';

const About = () => {
  return (
    <div style={{ background: '#F8F9FF', minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold mb-4" style={{ color: '#1A1A2E' }}>About Crystal Salon</h1>
            <p className="fs-5 mb-4" style={{ color: '#1A1A2E' }}>
              Welcome to Crystal Salon, where beauty meets elegance. We are dedicated to providing
              exceptional beauty services in a luxurious and relaxing environment. Our team of
              experienced professionals uses only the finest products and latest techniques to
              help you look and feel your best.
            </p>
            <p className="mb-4" style={{ color: '#1A1A2E' }}>
              With years of experience in the beauty industry, we understand that every client is
              unique. That's why we offer personalized consultations to ensure you receive the
              perfect treatment for your individual needs and preferences.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div className="text-center p-3" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 className="fw-bold" style={{ color: '#6C63FF' }}>500+</h3>
                  <p className="mb-0" style={{ color: '#1A1A2E' }}>Happy Clients</p>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-3" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 className="fw-bold" style={{ color: '#FF6F91' }}>5 Years</h3>
                  <p className="mb-0" style={{ color: '#1A1A2E' }}>Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Crystal Salon Interior"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="text-center p-4" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="mb-3">
                <i className="fas fa-heart fa-3x" style={{ color: '#FF6F91' }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#6C63FF' }}>Passion</h4>
              <p style={{ color: '#1A1A2E' }}>
                We are passionate about beauty and committed to excellence in every service we provide.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="mb-3">
                <i className="fas fa-star fa-3x" style={{ color: '#6C63FF' }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Quality</h4>
              <p style={{ color: '#1A1A2E' }}>
                We use only premium products and the latest techniques to ensure outstanding results.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="mb-3">
                <i className="fas fa-users fa-3x" style={{ color: '#FF6F91' }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#6C63FF' }}>Care</h4>
              <p style={{ color: '#1A1A2E' }}>
                Your satisfaction and comfort are our top priorities. We treat every client like family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;