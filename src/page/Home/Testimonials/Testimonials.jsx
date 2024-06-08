import './Testimonial.css';
import DataTestimony from './DataTestimony'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {DataTestimony.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
