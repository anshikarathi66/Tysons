import React from 'react'
import supremecourt from './images/supreme_court.png';
import lawbook from './images/law_book.jpeg';
import heading from  './CSS/heading.css';

function Heading() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide heading-carousel" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-indicators heading-carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active  heading-carousel-indicators-btn"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
      className='heading-carousel-indicators-btn'
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
      className='heading-carousel-indicators-btn'
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={supremecourt} className="heading-img d-block w-100" alt="..." />
      <div className="heading-carousel-caption carousel-caption d-block">
        <h5 className="heading-h5">TYSONS LEGAL ALLIES</h5>
        <p className="heading-p">Confederate of Experts</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={lawbook} className="heading-img d-block w-100" alt="..." />
      <div className="heading-carousel-caption carousel-caption d-block">
        <h5 className="heading-h5">TYSONS LEGAL ALLIES</h5>
        <p className="heading-p">Your Legal Journey Starts Here</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="heading-img d-block w-100" alt="..." />
      <div className="heading-carousel-caption carousel-caption d-block">
        <h5 className="heading-h5">TYSONS LEGAL ALLIES</h5>
        <p className="heading-p">Creating a Supportive Legal Community</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev heading-carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next heading-carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Heading;
