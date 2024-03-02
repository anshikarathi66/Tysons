import React from 'react'
import testimony from "./CSS/testimony.css"

function Testimony() {
  return (
    <section id="testimonials">
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="false"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <h2 className="testimonial-text">
          I no longer have to sniff other dogs for love. I've found the hottest
          Corgi on TinDog. Woof.
        </h2>
        <img
          className="testimonial-img"
          src="https://picsum.photos/100"
          alt="dog-profile"
        />
        <em>Pebbles, New York</em>
      </div>
      <div className="carousel-item">
        <h2 className="testimonial-text">
          My dog used to be so lonely, but with TinDog's help, they've found the
          love of their life. I think.
        </h2>
        <img
          className="testimonial-img"
          src="https://picsum.photos/100"
          alt="lady-profile"
        />
        <em>Beverly, Illinois</em>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

  );
}

export default Testimony;
