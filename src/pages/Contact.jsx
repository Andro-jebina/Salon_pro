import React from 'react';

const Contact = () => {
  return (
    <div style={{ background: '#F8F9FF', minHeight: '100vh' }}>
      <div className="container py-5">
        <h1 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>Contact Us</h1>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4" style={{ color: '#6C63FF' }}>Get In Touch</h3>
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Address</h5>
                  <p style={{ color: '#1A1A2E' }}>
                    <i className="fas fa-map-marker-alt me-2" style={{ color: '#6C63FF' }}></i>
                    123 Beauty Street<br />
                    Crystal City, CC 12345
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Phone</h5>
                  <p style={{ color: '#1A1A2E' }}>
                    <i className="fas fa-phone me-2" style={{ color: '#6C63FF' }}></i>
                    +91 98765 43210
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Opening Hours</h5>
                  <p style={{ color: '#1A1A2E' }}>
                    <i className="fas fa-clock me-2" style={{ color: '#6C63FF' }}></i>
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Email</h5>
                  <p style={{ color: '#1A1A2E' }}>
                    <i className="fas fa-envelope me-2" style={{ color: '#6C63FF' }}></i>
                    info@crystalsalon.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="map-placeholder h-100 d-flex align-items-center justify-content-center" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '2px dashed #ddd',
              minHeight: '400px'
            }}>
              <div className="text-center">
                <i className="fas fa-map-marked-alt fa-3x mb-3" style={{ color: '#6C63FF' }}></i>
                <h4 style={{ color: '#1A1A2E' }}>Google Maps Integration</h4>
                <p style={{ color: '#666' }}>Interactive map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4 text-center" style={{ color: '#6C63FF' }}>Send us a Message</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      ></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-lg px-5" style={{
                        background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                        border: 'none',
                        borderRadius: '50px',
                        color: '#fff',
                        fontWeight: '600'
                      }}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;