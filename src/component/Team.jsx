import React ,{useState} from 'react';
import Slider from 'react-slick';
import './CSS/team.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import chirag_tiwari from './images/Chirag_Tiwari.jpg'
// import vanshika_saini from './images/vanshika_saini.jpg'
// import aryaman_singh from './images/aryaman_singh.jpg'
// import rithik_shankar from './images/rithik_shankar.jpg'
// import aditya_bachkoti from './images/aditya_bachkoti.jpg'
// import chirag_tiwari from './images/'
// import './Team.css'; // Import your CSS file

import Swiper from 'swiper';

function Team() {
  const [centerCardIndex, setCenterCardIndex] = useState(0);
  const teamMembers = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Chirag K. Tiwari',
      role: 'Founder & CEO',
      quote: 'Tysons Legal Allies, led by Chirag K. Tiwari, streamlines law aspirants journeys with tailored event solutions, paving a seamless path to success.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Vanshika Saini',
      role: 'Ambassador',
      quote: 'Ambassador Vanshika Saini, a dynamic force at Tysons Legal Allies, passionately champions tailored event solutions for success in the legal realm. Join her for an exceptional legal journey.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Aryaman Singh',
      role: 'Operational Head',
      quote: 'As Operational Head, Aryaman Singh leads Tysons Legal Allies with precision, ensuring flawless execution of tailored legal events. Trust him for operational excellence in our dynamic community.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Rithik Shankar',
      role: 'Operational Head',
      quote: 'Operational Head Rithik Shankar ensures flawless execution at Tysons Legal Allies, embodying excellence in leadership and legal event management. ',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Aditya Bachkoti',
      role: 'Project Manager',
      quote: 'Aditya Bachkoti, Tysons Legal Allies Project Manager, leads with strategic vision, ensuring successful project implementation for excellence in our dynamic legal community. ',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Anshika Rathi',
      role: 'IT Cell Head',
      quote: 'Anshika Rathi, Tysons Legal Allies IT Cell Head, leads technological innovation for a seamless digital experience, contributing to excellence in our dynamic community.',
    },
    // ... Add more team members here
  ];


  // Your slider settings

 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
    beforeChange: (current, next) => setCenterCardIndex(next),
  };

  return (
    <div className="gtco-testimonials">
      <p className='Meet'>Meet Our Legal Allies</p>
      <p className='Professions'>Connecting Professions for Shared Success</p>
      <Slider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div
              className={`card text-center ${centerCardIndex === index ? 'focused' : 'blurred'}`}
            >
              <img className="card-img-top" src={member.imageSrc} alt={`Team Member - ${index}`} />
              <div className="card-body">
                <h5 className='team-h5'>
                  {member.name} <br />
                  <span> {member.role} </span>
                </h5>
                <p className="card-text">{member.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Team;