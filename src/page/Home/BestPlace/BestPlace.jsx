
import './BestPlace.css';
import places from './dataplace';


const BestPlace = () => {
  return (
    <section className="best-place">
      <h2 className="section-title">Featured Destinations</h2>
      <div className="places-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.image} alt={place.name} className="place-image" />
            <h3 className="place-name">{place.name}</h3>
            <p className="place-description">{place.description}</p>
            <p className="place-price">{place.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestPlace;












