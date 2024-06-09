import './Trip.css';
import tripTypes from './TripTypesData';


const Trip = () => {
  return (
    <>
    <section className="trip-types-section">
      <h2 className="section-title">Trip Types</h2>
      {tripTypes.map((trip, index) => (
        <div key={index} className="trip-section">
          <h3 className="trip-type-title">{trip.title}</h3>
          <div className="trip-card">
            <div className="trip-gallery">
              {trip.images.map((image, imgIndex) => (
                <img src={image} alt={`${trip.title} ${imgIndex + 1}`} key={imgIndex} className="trip-image" />
              ))}
            </div>
            <div className="trip-details">
              <p className="trip-description">{trip.description}</p>
              <p className="trip-pricing">{trip.pricing}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
   
    </>
  );
};

export default Trip;
