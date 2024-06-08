
import aboutImg from './../../../assets/bg.jpg';
import './About.css';

const About = () => {
  return (
    <section className="homeAbout">
      <div className="about-img">
        <img src={aboutImg} alt="About Us" />
      </div>
      <div className="about-info">
        <h2 className="about-subtitle">
          About Us
        </h2>
        <p className="about-text">
        Zaph Tours is a premier travel company based in Kenya, specializing in providing the best safaris and adventure tours. With a strong reputation for delivering exceptional travel experiences, Zaph Tours offers a variety of packages that showcase the natural beauty and cultural richness of Kenya and other destinations. Our mission is to create memorable experiences for our clients through personalized service and expert knowledge of the region.
        </p>
      </div>
    </section>
  );
}

export default About;
