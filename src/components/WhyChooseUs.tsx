import './WhyChooseUs.css';

const features = [
  {
    id: 1,
    number: '01',
    title: 'Reliable and Professional Service',
    description: 'Consistent, dependable cleaning you can count on every time.',
  },
  {
    id: 2,
    number: '02',
    title: 'Attention to Detail',
    description: 'Meticulous care in every corner, ensuring nothing is overlooked.',
  },
  {
    id: 3,
    number: '03',
    title: 'Flexible Cleaning Arrangements',
    description: 'Cleaning schedules tailored to fit your lifestyle and business needs.',
  },
  {
    id: 4,
    number: '04',
    title: 'Customer-Focused Approach',
    description: 'Your satisfaction is our priority with responsive, attentive service.',
  },
  {
    id: 5,
    number: '05',
    title: 'Residential and Commercial Solutions',
    description: 'Expert cleaning for homes, offices, shops and business premises.',
  },
  {
    id: 6,
    number: '06',
    title: 'Commitment to Clean and Welcoming Spaces',
    description: 'Creating healthier, fresher environments for you to enjoy.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="section why-choose">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">The Difference Is in the Details</h2>
          <p className="section-subtitle">
            Professional cleaning with a personal touch
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-header">
                <span className="feature-number">{feature.number}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
