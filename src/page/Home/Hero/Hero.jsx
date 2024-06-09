

import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='hero-text'>
           <h1>Welcome To Zaphy Tour</h1>
           <h2>Explore the World with Us</h2>
            <p>Join Zaph Tours for unforgettable safaris and adventure tours in the heart of Kenya and beyond. Experience the thrill of wildlife, stunning landscapes, and rich cultural heritage.</p>
            <div className='button'>
              <button className='primary-btn'>
                Book NOW
              </button>
              <button>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
