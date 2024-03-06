import React from 'react';
import './CSS/about.css'; // Import your custom CSS file
import chirag_tiwari from './images/Chirag_Tiwari.jpg';

import './CSS/about.css';
function About() {

  return (
    <section className="about-section">
      <div className="container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                <h2 className='about-h2'>
                  Welcome To <br /> Tysons Legal Allies
                </h2>
              </div>
              <div className="text">
                Welcome to Tysons Legal Allies! Beyond a platform, we've created a vibrant community redefining legal education. With engaging events like Moot Courts and Placement Drives, we infuse personality into the legal journey. Join us for a unique, impactful, and enjoyable adventure in the legal realm. Cheers to a legal journey like no other!
              </div>
              <div className="email">
                Founder & CEO of Tysons
              </div>
              <a href="about.html" className="theme-btn btn-style-three">
                Read More
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div
              className="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                {/* Lazy load the image */}
                <img src={chirag_tiwari} alt="" loading="lazy" />
                <div className="overlay-box">
                  <div className="year-box">
                    <span className="number">Chirag K. Tiwari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
