import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Priya Sharma', rating: 5, comment: 'Amazing service! My hair looks fabulous. Highly recommend Crystal Salon.' },
    { name: 'Anjali Verma', rating: 5, comment: 'The facial treatment was relaxing and effective. Will definitely come back.' },
    { name: 'Kavita Singh', rating: 5, comment: 'Professional staff and great ambiance. Loved the nail art!' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd' }}>★</span>
    ));
  };

  return (
    <section className="py-5" style={{ background: '#F8F9FF' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>What Our Clients Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="d-flex justify-content-center">
                  <div className="testimonial-card card border-0 shadow-sm" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    maxWidth: '600px',
                    width: '100%'
                  }}>
                    <div className="card-body p-4 text-center">
                      <div className="rating mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="card-text mb-3" style={{ fontStyle: 'italic', color: '#555' }}>
                        "{testimonial.comment}"
                      </p>
                      <h6 className="card-title fw-bold" style={{ color: '#6C63FF' }}>- {testimonial.name}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;