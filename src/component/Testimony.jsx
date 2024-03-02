import React, { useState, useEffect } from 'react';
import './CSS/testimony.css';

const Testimony = () => {
  const [idx, setIdx] = useState(0);

  const testimonials = [
    {
      name: 'Miyah Myles',
      position: 'Marketing',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      text:
        "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
      name: 'June Cha',
      position: 'Software Engineer',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'This guy is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    // ... (add more testimonials as needed)
  ];

  const updateTestimonial = () => {
    setIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTestimonial, 10000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [idx]);

  const { name, position, photo, text } = testimonials[idx];

  return (
    <div className="testimonial-container">
      <h2>Testimonials</h2>
      <div className="progress-bar" />
      <div className="fa fa-quote-right fa-quote" />
      <div className="fa fa-quote-left fa-quote" />
      <p className="testimonial">{text}</p>
      <div className="user">
        <img src={photo} alt="user" className="user-image" />
        <div className="user-details">
          <h4 className="username">{name}</h4>
          <p className="role">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
