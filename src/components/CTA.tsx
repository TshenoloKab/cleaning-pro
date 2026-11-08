import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-background"></div>
      <div className="container cta-content">
        <h2 className="cta-title">Ready for a Fresher, Cleaner Space?</h2>
        <p className="cta-description">
          Let's make your home or workplace a cleaner and more welcoming environment.
        </p>
        <a href="#contact" className="btn btn-primary cta-button">Request Your Free Quote</a>
      </div>
    </section>
  );
};

export default CTA;
