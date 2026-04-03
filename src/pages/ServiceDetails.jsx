import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();

  const services = [
    {
      id: 1,
      name: 'Facial',
      price: '₹999',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Indulge in our premium facial treatment that deeply cleanses, exfoliates, and nourishes your skin. Our expert estheticians use high-quality products to rejuvenate your complexion and leave you with glowing, healthy skin.',
      benefits: ['Deep cleansing', 'Exfoliation', 'Hydration', 'Anti-aging treatment', 'Customized mask application'],
      beforeAfter: [
        'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ],
      testimonials: [
        { name: 'Priya S.', rating: 5, review: 'Amazing facial! My skin feels so refreshed and looks glowing.' },
        { name: 'Anjali M.', rating: 5, review: 'The best facial experience ever. Highly recommend!' }
      ]
    },
    {
      id: 2,
      name: 'Haircut',
      price: '₹499',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Transform your look with our professional haircut services. Our skilled stylists create the perfect cut tailored to your face shape, hair type, and personal style preferences.',
      benefits: ['Consultation', 'Precision cutting', 'Styling', 'Hair wash', 'Professional advice'],
      beforeAfter: [
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ],
      testimonials: [
        { name: 'Rahul K.', rating: 5, review: 'Perfect haircut! Exactly what I wanted.' },
        { name: 'Sneha P.', rating: 5, review: 'Great styling and very professional service.' }
      ]
    },
    {
      id: 3,
      name: 'Hair Spa',
      price: '₹1499',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Revitalize your hair with our nourishing hair spa treatment. Deep conditioning, scalp massage, and premium products restore moisture and shine to your locks.',
      benefits: ['Deep conditioning', 'Scalp massage', 'Oil treatment', 'Heat therapy', 'Protein treatment'],
      beforeAfter: [
        'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ],
      testimonials: [
        { name: 'Kavita R.', rating: 5, review: 'My hair feels so soft and healthy after the spa!' },
        { name: 'Meera L.', rating: 5, review: 'Worth every penny. Amazing results.' }
      ]
    },
    {
      id: 4,
      name: 'Nail Art',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Express your style with our creative nail art services. From elegant French tips to bold designs, our nail technicians create stunning looks that match your personality.',
      benefits: ['Nail preparation', 'Cuticle care', 'Base coat application', 'Custom design', 'Top coat sealing'],
      beforeAfter: [
        'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      ],
      testimonials: [
        { name: 'Pooja T.', rating: 5, review: 'Love my nail art! So creative and beautiful.' },
        { name: 'Divya N.', rating: 5, review: 'Perfect designs and excellent service.' }
      ]
    }
  ];

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return <div className="container py-5"><h1>Service not found</h1></div>;
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd' }}>★</span>
    ));
  };

  return (
    <div style={{ background: '#F8F9FF', minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-5">
                <img src={service.image} className="img-fluid rounded mb-4" alt={service.name} />
                <h1 className="fw-bold mb-3" style={{ color: '#6C63FF' }}>{service.name}</h1>
                <p className="fs-5 mb-4" style={{ color: '#1A1A2E' }}>{service.description}</p>
                <div className="mb-4">
                  <h3 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Benefits</h3>
                  <ul className="list-unstyled">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-check-circle me-2" style={{ color: '#6C63FF' }}></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="fw-bold mb-3" style={{ color: '#FF6F91' }}>Before & After</h3>
                  <div className="row g-3">
                    <div className="col-6">
                      <img src={service.beforeAfter[0]} className="img-fluid rounded" alt="Before" />
                      <p className="text-center mt-2 fw-bold" style={{ color: '#1A1A2E' }}>Before</p>
                    </div>
                    <div className="col-6">
                      <img src={service.beforeAfter[1]} className="img-fluid rounded" alt="After" />
                      <p className="text-center mt-2 fw-bold" style={{ color: '#1A1A2E' }}>After</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-3 fw-bold" style={{ color: '#FF6F91' }}>{service.price}</span>
                  <Link to="/booking" className="btn btn-lg px-5" style={{
                    background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#fff',
                    fontWeight: '600'
                  }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4" style={{ color: '#6C63FF' }}>Customer Reviews</h3>
                {service.testimonials.map((testimonial, index) => (
                  <div key={index} className="mb-4 pb-3 border-bottom">
                    <div className="rating mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="mb-2" style={{ color: '#1A1A2E' }}>"{testimonial.review}"</p>
                    <small className="text-muted fw-bold">- {testimonial.name}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;