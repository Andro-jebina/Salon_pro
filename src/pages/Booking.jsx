import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const EMAILJS_CONFIG = {
    serviceId: 'Service0987',
    ownerTemplateId: 'template_pmzpers',
    userTemplateId: 'template_n66y9zd',
    publicKey: '-P7MVwgQiMAIYtxRL'
  };

  const services = ['Facial', 'Haircut', 'Hair Spa', 'Nail Art'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });

    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email';

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'Enter valid 10-digit number';

    if (!formData.service) newErrors.service = 'Select a service';
    if (!formData.date) newErrors.date = 'Select date';
    if (!formData.time) newErrors.time = 'Select time';

    return newErrors;
  };

  const sendEmails = async (data) => {
    try {
      // Owner email
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.ownerTemplateId,
        {
          customer_name: data.name,
          customer_email: data.email,
          customer_phone: data.phone,
          service: data.service,
          date: data.date,
          time: data.time
        },
        EMAILJS_CONFIG.publicKey
      );

      // Customer email
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.userTemplateId,
        {
          to_name: data.name,
          to_email: data.email,
          service: data.service,
          date: data.date,
          time: data.time
        },
        EMAILJS_CONFIG.publicKey
      );

      return true;
    } catch (err) {
      console.error('EmailJS Error:', err);
      return false;
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

    const success = await sendEmails(formData);

    if (!success) {
      setMessage({ type: 'error', text: 'Email failed. Please check your EmailJS configuration and try again.' });
      setIsLoading(false);
      return;
    }
    // Save locally
    const bookings = JSON.parse(localStorage.getItem('salonBookings') || '[]');
    bookings.push({ ...formData, id: Date.now() });
    localStorage.setItem('salonBookings', JSON.stringify(bookings));

    setMessage({
      type: 'success',
      text: '🎉 Booking confirmed! Check your email.'
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: ''
    });

    setIsLoading(false);
  };

  return (
    <div style={{ background: '#F8F9FF', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container py-5">
        <div className="col-lg-6 mx-auto">
          <div className="card p-4 shadow-lg" style={{ borderRadius: '20px' }}>
            <h2 className="text-center mb-4">Book Appointment</h2>

            {message.text && (
              <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="phone"
                placeholder="Phone"
                className="form-control mb-3"
                value={formData.phone}
                onChange={handleChange}
              />

              <select
                name="service"
                className="form-control mb-3"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <input
                type="date"
                name="date"
                className="form-control mb-3"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="time"
                className="form-control mb-3"
                value={formData.time}
                onChange={handleChange}
              />

              <button className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Book Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;