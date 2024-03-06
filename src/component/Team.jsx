import React ,{useState} from 'react';
import Slider from 'react-slick';
import './CSS/team.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chirag_tiwari1 from './images/Chirag_Tiwari1.jpg'
import vanshika_saini1 from './images/vanshika_saini1.jpg'
import aryaman_singh1 from './images/aryaman_singh1.jpg'
import rithik_shankar1 from './images/rithik_shankar1.jpg'
import aditya_bachkoti1 from './images/aditya_bachkoti1.jpg'
import anshika_rathi from './images/anshika_rathi.jpg'
import Swiper from 'swiper';

function Team() {
  const [centerCardIndex, setCenterCardIndex] = useState(0);
  const teamMembers = [
    {
      imageSrc: chirag_tiwari1,
      name: 'Chirag K. Tiwari',
      role: 'Founder & CEO',
      quote: 'Tysons Legal Allies, led by Chirag K. Tiwari, streamlines law aspirants journeys with tailored event solutions, paving a seamless path to success.',
    },
    {
      imageSrc: vanshika_saini1,
      name: 'Vanshika Saini',
      role: 'Ambassador',
      quote: 'Ambassador Vanshika Saini, a dynamic force at Tysons Legal Allies, passionately champions tailored event solutions for success in the legal realm. Join her for an exceptional legal journey.',
    },
    {
      imageSrc: aryaman_singh1,
      name: 'Aryaman Singh',
      role: 'Operational Head',
      quote: 'As Operational Head, Aryaman Singh leads Tysons Legal Allies with precision, ensuring flawless execution of tailored legal events. Trust him for operational excellence in our dynamic community.',
    },
    {
      imageSrc: rithik_shankar1,
      name: 'Rithik Shankar',
      role: 'Operational Head',
      quote: 'Operational Head Rithik Shankar ensures flawless execution at Tysons Legal Allies, embodying excellence in leadership and legal event management. ',
    },
    {
      imageSrc: aditya_bachkoti1,
      name: 'Aditya Bachkoti',
      role: 'Project Manager',
      quote: 'Aditya Bachkoti, Tysons Legal Allies Project Manager, leads with strategic vision, ensuring successful project implementation for excellence in our dynamic legal community. ',
    },
    {
      imageSrc: anshika_rathi,
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