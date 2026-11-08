import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2 className="section-title">More Than Just Cleaning. We Care About Your Space.</h2>
            <p className="about-text">
              We provide reliable cleaning solutions to help homeowners and businesses maintain clean, comfortable and welcoming environments. Every space deserves meticulous attention, and we take pride in delivering results that exceed expectations.
            </p>
            <p className="about-text">
              Our approach combines professional expertise with a genuine commitment to creating healthier, fresher spaces where people can thrive.
            </p>
            <div className="about-highlight">
              <div className="highlight-dot"></div>
              <p className="highlight-text">Meticulous Attention to Detail in Every Clean</p>
            </div>
          </div>
          <div className="about-image-wrapper">
            <img src="/about-image.jpg" alt="Professional cleaner at work" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
