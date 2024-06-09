
import './Destination.css';
import destinations from './DestinationData';

const Destination = () => {
  return (
    <section className="destination-section">
      <h2 className="section-title">Featured Destinations</h2>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h3 className="destination-name">{destination.name}</h3>
            <p className="destination-description">{destination.description}</p>
            <p className="destination-price">Price per group: {destination.pricePerGroup}</p>
            <p className="destination-individual-cost">Individual cost: {destination.individualCost}</p>
            <a href={destination.link} className="destination-link">Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destination;
