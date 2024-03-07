import React, { useState, useEffect } from 'react';
import './CSS/testimony.css';
import Hariom_Dixit from './images/Hariom_dixit.JPG';
import Sandeep_Tiwari from './images/Sandeep_Tiwari.JPG';
import ankita_singh from './images/ankita_singh.jpeg';

const Testimony = () => {
  const [idx, setIdx] = useState(0);

  const testimonials = [
    {
      name: 'Hariom Dixit',
      position: 'Advocate',
      photo:
        Hariom_Dixit,
      text:
        "Tysons Legal Allies is not just a platform; it's a revolution in the legal landscape. As an advocate deeply invested in shaping the future of law, I appreciate the tireless efforts of Tysons in creating a vibrant community of legal professionals. Their commitment to guiding law students and providing opportunities for collaboration sets them apart. Tysons Legal Allies is not just a destination for legal services; it's a home for the legal fraternity, fostering growth, mentorship, and a shared passion for justice."},
    {
      name: 'Sandeep K. Tiwari',
      position: 'Leading Industrialist',
      photo: Sandeep_Tiwari,
      text:
        'Tysons Legal Allies has successfully bridged the gap between the legal fraternity and the business world. As a leading industrialist, I have witnessed the impact of their platform in connecting legal experts with industries seeking specialized advice. This initiative not only facilitates smoother business operations but also nurtures a collaborative environment. Tysons Legal Allies is undoubtedly a catalyst in fostering meaningful partnerships between the legal and corporate sectors.'},
    {
      name: 'Ankita Singh',
      position: 'PHD Scholar',
      photo: ankita_singh,
      text:
        'As a PhD scholar immersed in the intricate realms of legal academia, I am immensely impressed by Tysons Legal Allies commitment to empowering law aspirants. Their digital platform provides an invaluable space for knowledge exchange and mentorship. It serves as a beacon for aspiring scholars, guiding them through the complexities of legal research and creating a supportive community. Tysons Legal Allies is a testament to the transformative potential of digital platforms in advancing legal education.'},
    
  ];

  const updateTestimonial = () => {
    setIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTestimonial, 10000);

    return () => clearInterval(intervalId);
  }, [idx]);

  const { name, position, photo, text } = testimonials[idx];

  return (
    <div className='testimony-main-div'>
    <div className="container-lg testimonial-container">
      <h2 className="testimony-h2 text-center">Testimonials</h2>
      <div className="progress-bar" />
      <div className="fa fa-quote-right fa-quote" />
      <div className="fa fa-quote-left fa-quote" />
      <p className="testimonial">{text}</p>
      <div className="user d-flex align-items-center justify-content-center">
        <img src={photo} alt="user" className="user-image rounded-circle" />
        <div className="user-details ms-3">
          <h4 className="testimony-h4 username">{name}</h4>
          <p className="role">{position}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimony;
