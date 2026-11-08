import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">Clean-Pro</h3>
            <p className="footer-description">
              Professional cleaning solutions for homes and businesses. Delivering cleaner, fresher and healthier spaces with attention to detail.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose">Why Choose Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Residential Cleaning</a></li>
              <li><a href="#services">Deep Cleaning</a></li>
              <li><a href="#services">Office & Commercial</a></li>
              <li><a href="#services">Move-In & Move-Out</a></li>
              <li><a href="#services">Post-Construction</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>info@clean-pro.com</li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-whatsapp"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Clean-Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
