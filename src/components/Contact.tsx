import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: '',
    });
  };

  const whatsappNumber = ''; // Replace with actual number

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get Your Free Quote Today</h2>
          <p className="section-subtitle">
            Tell us about your cleaning needs and we'll provide a tailored solution
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-text">
              Ready to experience the difference of professional cleaning? Reach out to us today.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-label">Email</div>
                <a href="mailto:info@clean-pro.com" className="contact-detail-value">info@clean-pro.com</a>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">WhatsApp</div>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail-value whatsapp-link"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service" className="form-label">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="commercial">Office & Commercial Cleaning</option>
                  <option value="movein">Move-In & Move-Out Cleaning</option>
                  <option value="postcon">Post-Construction Cleaning</option>
                  <option value="specialised">Specialised Cleaning</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="location" className="form-label">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
