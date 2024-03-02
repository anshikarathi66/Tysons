import React from 'react'
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
      <img src="https://picsum.photos/5000" className="heading-img d-block w-100" alt="..." />
      <div className="heading-carousel-caption carousel-caption d-block">
        <h5 className="heading-h5">First slide label</h5>
        <p className="heading-p">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/5000" className="heading-img d-block w-100" alt="..." />
      <div className="heading-carousel-caption carousel-caption d-block">
        <h5 className="heading-h5">Second slide label</h5>
        <p className="heading-p">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/5000" className="heading-img d-block w-100" alt="..." />
      <div className="heading-carousel-caption carousel-caption d-block">
        <h5 className="heading-h5">Third slide label</h5>
        <p className="heading-p">Some representative placeholder content for the third slide.</p>
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
