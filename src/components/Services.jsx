import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { id: 1, name: 'Facial', price: '₹999', icon: '🧴' },
    { id: 2, name: 'Haircut', price: '₹499', icon: '✂️' },
    { id: 3, name: 'Hair Spa', price: '₹1499', icon: '💆‍♀️' },
    { id: 4, name: 'Nail Art', price: '₹799', icon: '💅' }
  ];

  return (
    <section className="py-5" style={{ background: '#F8F9FF' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>Our Services</h2>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.id}>
              <div className="service-card card border-0 shadow-sm h-100" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3" style={{ fontSize: '3rem' }}>{service.icon}</div>
                  <h5 className="card-title fw-bold" style={{ color: '#6C63FF' }}>{service.name}</h5>
                  <p className="card-text fs-4 fw-bold" style={{ color: '#FF6F91' }}>{service.price}</p>
                  <Link to={`/services/${service.id}`} className="btn w-100 mt-3" style={{
                    background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#fff',
                    fontWeight: '600'
                  }}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;