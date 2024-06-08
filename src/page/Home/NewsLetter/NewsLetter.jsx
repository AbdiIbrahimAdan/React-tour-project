import { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle newsletter signup
    alert(`Thank you for signing up with ${email}`);
  };

  return (
    <section className="newsletter-signup">
      <h2 className="section-title">Newsletter Signup</h2>
      <h3>Stay Updated</h3>
      <p>Sign up for our newsletter to receive weekly updates on our latest safari and adventure tour packages.</p>
      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="signup-input"
        />
        <button type="submit" className="signup-button">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
