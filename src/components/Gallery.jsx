import React from 'react';

const Gallery = () => {
  const images = [
    { before: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', after: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { before: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', after: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { before: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', after: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { before: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', after: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <section className="py-5" style={{ background: '#F8F9FF' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>Before & After Gallery</h2>
        <div className="row g-4">
          {images.map((img, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="gallery-item position-relative overflow-hidden rounded" style={{
                height: '250px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <img src={img.before} alt="Before" className="img-fluid w-100 h-100 object-fit-cover" />
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{
                  background: 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  <span className="text-white fw-bold">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;