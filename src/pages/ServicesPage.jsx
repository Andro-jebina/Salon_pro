import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    { id: 1, name: 'Facial', price: '₹999', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Deep cleansing facial treatment for glowing skin' },
    { id: 2, name: 'Haircut', price: '₹499', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Professional haircut with modern styling' },
    { id: 3, name: 'Hair Spa', price: '₹1499', image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Nourishing hair spa for healthy, shiny hair' },
    { id: 4, name: 'Nail Art', price: '₹799', image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', description: 'Creative nail art designs with premium polish' }
  ];

  return (
    <div style={{ background: '#F8F9FF', minHeight: '100vh' }}>
      <div className="container py-5">
        <h1 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>Our Services</h1>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.id}>
              <div className="card border-0 shadow-sm h-100 service-card" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}>
                <img src={service.image} className="card-img-top" alt={service.name} style={{ height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }} />
                <div className="card-body text-center p-4">
                  <h5 className="card-title fw-bold" style={{ color: '#6C63FF' }}>{service.name}</h5>
                  <p className="card-text text-muted mb-3">{service.description}</p>
                  <p className="card-text fs-4 fw-bold mb-3" style={{ color: '#FF6F91' }}>{service.price}</p>
                  <Link to={`/services/${service.id}`} className="btn w-100" style={{
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
    </div>
  );
};

export default ServicesPage;