import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const services = ['Facial', 'Haircut', 'Hair Spa', 'Nail Art'];

  // EmailJS Configuration (Replace with your actual values)
  const EMAILJS_CONFIG = {
    serviceId: 'your_service_id', // Replace with your EmailJS service ID
    ownerTemplateId: 'your_owner_template_id', // Template for salon owner
    userTemplateId: 'your_user_template_id', // Template for user confirmation
    publicKey: 'your_public_key' // Replace with your EmailJS public key
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    // Clear any previous messages when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    return newErrors;
  };

  const sendEmails = async (bookingData) => {
    try {
      // Send email to salon owner
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.ownerTemplateId,
        {
          customer_name: bookingData.name,
          customer_email: bookingData.email,
          customer_phone: bookingData.phone,
          service: bookingData.service,
          date: bookingData.date,
          time: bookingData.time,
          booking_date: new Date().toLocaleDateString(),
          salon_email: 'androjebina2005@gmail.com'
        },
        EMAILJS_CONFIG.publicKey
      );

      // Send confirmation email to user
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.userTemplateId,
        {
          to_name: bookingData.name,
          to_email: bookingData.email,
          service: bookingData.service,
          date: bookingData.date,
          time: bookingData.time,
          salon_contact: '+91 98765 43210',
          salon_address: '123 Beauty Street, Crystal City, CC 12345'
        },
        EMAILJS_CONFIG.publicKey
      );

      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error.text || 'Failed to send emails' };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Send emails first
      const emailResult = await sendEmails(formData);

      if (!emailResult.success) {
        setMessage({
          type: 'error',
          text: 'Failed to send confirmation emails. Please try again or contact us directly.'
        });
        setIsLoading(false);
        return;
      }

      // Store booking in localStorage
      const bookings = JSON.parse(localStorage.getItem('salonBookings') || '[]');
      const bookingWithId = {
        ...formData,
        id: Date.now(),
        status: 'confirmed',
        bookedAt: new Date().toISOString()
      };
      bookings.push(bookingWithId);
      localStorage.setItem('salonBookings', JSON.stringify(bookings));

      // Show success message
      setMessage({
        type: 'success',
        text: '🎉 Booking confirmed! Check your email for confirmation details.'
      });

      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: ''
        });
        setMessage({ type: '', text: '' });
      }, 3000);

    } catch (error) {
      console.error('Booking submission error:', error);
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-5" style={{ background: '#F8F9FF' }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1A1A2E' }}>Book Your Appointment</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="booking-card card border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-4">
                {message.text && (
                  <div className={`alert mb-4 ${
                    message.type === 'success' ? 'alert-success' : 'alert-danger'
                  }`} role="alert">
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold" style={{ color: '#6C63FF' }}>Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={isLoading}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold" style={{ color: '#6C63FF' }}>Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      disabled={isLoading}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold" style={{ color: '#6C63FF' }}>Phone Number</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit phone number"
                      disabled={isLoading}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="service" className="form-label fw-bold" style={{ color: '#6C63FF' }}>Service</label>
                    <select
                      className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isLoading}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => <option key={service} value={service}>{service}</option>)}
                    </select>
                    {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="date" className="form-label fw-bold" style={{ color: '#6C63FF' }}>Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      disabled={isLoading}
                    />
                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="time" className="form-label fw-bold" style={{ color: '#6C63FF' }}>Time</label>
                    <input
                      type="time"
                      className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                    {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                    style={{
                      background: isLoading ? '#ccc' : 'linear-gradient(135deg, #6C63FF, #FF6F91)',
                      border: 'none',
                      borderRadius: '50px',
                      color: '#fff',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease'
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Sending...
                      </>
                    ) : (
                      'Book Now'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;