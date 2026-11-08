import './Services.css';

const services = [
  {
    id: 1,
    title: 'Residential Cleaning',
    description: 'Regular home cleaning, kitchens, bathrooms, living areas and bedrooms.',
    size: 'large',
    image: '/residential-cleaning.jpg',
  },
  {
    id: 2,
    title: 'Deep Cleaning',
    description: 'Detailed cleaning for spaces requiring extra attention.',
    size: 'medium',
    image: '/deep-cleaning.jpg',
  },
  {
    id: 3,
    title: 'Office & Commercial Cleaning',
    description: 'Professional cleaning solutions for offices, shops and business premises.',
    size: 'medium',
    image: '/office-commercial.jpg',
  },
  {
    id: 4,
    title: 'Move-In & Move-Out Cleaning',
    description: 'Cleaning services to prepare properties for new occupants.',
    size: 'small',
    image: '/move-in.jpg',
  },
  {
    id: 5,
    title: 'Post-Construction Cleaning',
    description: 'Removing dust and cleaning spaces following renovation or construction.',
    size: 'small',
    image: '/post-contruction.jpg',
  },
  {
    id: 6,
    title: 'Specialised Cleaning',
    description: "Custom cleaning solutions tailored to your specific requirements.",
    size: 'small',
    image: '/specialised.jpg',
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Cleaning Solutions Tailored to Your Needs</h2>
          <p className="section-subtitle">
            Comprehensive cleaning services for homes and businesses with uncompromising quality
          </p>
        </div>
        <div className="services-masonry">
          {services.map((service) => (
            <div key={service.id} className={`service-card service-card--${service.size}`}>
              <div className="service-card-inner">
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <div className="service-content-top">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
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