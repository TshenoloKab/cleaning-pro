import './HowItWorks.css';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Get in Touch',
    description: 'Tell us about your cleaning requirements.',
  },
  {
    id: 2,
    number: '02',
    title: 'Receive Your Quote',
    description: 'We discuss your needs and provide a quotation.',
  },
  {
    id: 3,
    number: '03',
    title: 'Schedule Your Cleaning',
    description: 'Choose a suitable date and time.',
  },
  {
    id: 4,
    number: '04',
    title: 'Enjoy a Cleaner Space',
    description: 'Our team takes care of your cleaning requirements.',
  },
];

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Simple Steps to a Cleaner Space</h2>
          <p className="section-subtitle">
            Getting started is easy with our straightforward process
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-number-wrapper">
                <div className="step-number">{step.number}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
