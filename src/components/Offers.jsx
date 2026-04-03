import React from 'react';

const Offers = () => {
  const offers = [
    { title: '20% OFF Bridal Package', description: 'Special discount on complete bridal makeup and hair styling.', badge: '20% OFF' },
    { title: 'Free Hair Spa with Haircut', description: 'Get a complimentary hair spa treatment with every haircut.', badge: 'FREE' }
  ];

  return (
    <section className="py-5" style={{ background: '#1A1A2E' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#F8F9FF' }}>Special Offers</h2>
        <div className="row g-4 justify-content-center">
          {offers.map((offer, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="offer-card card border-0 shadow-lg h-100" style={{
                background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                borderRadius: '20px',
                color: '#fff'
              }}>
                <div className="card-body p-4 text-center">
                  <div className="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle" style={{
                    fontSize: '0.8rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px'
                  }}>
                    {offer.badge}
                  </div>
                  <h5 className="card-title fw-bold mt-3">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;