import React from 'react';
import Slider from 'react-slick';
import './CSS/team.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Team() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nav: true,
        },
      },
    ],
  };

  return (
    <div className="gtco-testimonials">
      <h2>Testimonials Carousel - Cards Comments</h2>
      <Slider {...sliderSettings}>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
              alt=""
            />
            <div className="card-body">
              <h5>
                Ronne Galle <br />
                <span> Project Manager </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
              alt=""
            />
            <div className="card-body">
              <h5>
                Missy Limana
                <br />
                <span> Engineer </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302"
              alt=""
            />
            <div className="card-body">
              <h5>
                Martha Brown
                <br />
                <span> Project Manager </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
              alt=""
            />
            <div className="card-body">
              <h5>
                Hanna Lisem
                <br />
                <span> Project Manager </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Team;import React from 'react';
import Slider from 'react-slick';
import './CSS/team.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Team() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nav: true,
        },
      },
    ],
  };

  return (
    <div className="gtco-testimonials">
      <h2>Testimonials Carousel - Cards Comments</h2>
      <Slider {...sliderSettings}>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
              alt=""
            />
            <div className="card-body">
              <h5>
                Ronne Galle <br />
                <span> Project Manager </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
              alt=""
            />
            <div className="card-body">
              <h5>
                Missy Limana
                <br />
                <span> Engineer </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302"
              alt=""
            />
            <div className="card-body">
              <h5>
                Martha Brown
                <br />
                <span> Project Manager </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
              alt=""
            />
            <div className="card-body">
              <h5>
                Hanna Lisem
                <br />
                <span> Project Manager </span>
              </h5>
              <p className="card-text">
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”{" "}
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Team;
