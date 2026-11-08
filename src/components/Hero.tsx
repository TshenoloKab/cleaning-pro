import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(/hero-image.jpg)` }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-label">PROFESSIONAL CLEANING SERVICES</span>
          <h1 className="hero-title">
            A Cleaner Space.
            <br />
            A Better Way to Live.
          </h1>
          <p className="hero-description">
            Professional cleaning solutions for homes and businesses. We make it easier to enjoy cleaner, fresher and healthier spaces.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
            <a href="#services" className="btn btn-secondary">Explore Our Services</a>
          </div>
          <p className="hero-trust">
            Reliable Service | Professional Care | Attention to Detail
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
