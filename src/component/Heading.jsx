import React from 'react';
import supremecourt from './images/supreme_court.png';
import lawbook from './images/law_book.jpeg';
import heading from './CSS/heading.css';

function Heading() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide heading-carousel"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators heading-carousel-indicators">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active heading-carousel-indicators-btn' : 'heading-carousel-indicators-btn'}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {[
          { imgSrc: supremecourt, heading: 'TYSONS LEGAL ALLIES', subHeading: 'Confederate of Experts' },
          { imgSrc: lawbook, heading: 'TYSONS LEGAL ALLIES', subHeading: 'Your Legal Journey Starts Here' },
          {
            imgSrc:
              'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            heading: 'TYSONS LEGAL ALLIES',
            subHeading: 'Creating a Supportive Legal Community',
          },
        ].map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={item.imgSrc}
              className="heading-img d-block w-100"
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
            <div className="heading-carousel-caption carousel-caption d-block">
              <h5 className="heading-h5">{item.heading}</h5>
              <p className="heading-p">{item.subHeading}</p>
            </div>
          </div>
        ))}
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
