import React ,{useState} from 'react';
import Slider from 'react-slick';
import './CSS/team.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Team.css'; // Import your CSS file

import Swiper from 'swiper';

function Team() {
  const [centerCardIndex, setCenterCardIndex] = useState(0);
  const teamMembers = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Chirag K. Tiwari',
      role: 'Founder & CEO',
      quote: 'Tyson\'s Legal Allies, founded by CHIRAG K TIWARI, simplifies the journey for law aspirants with tailored event solutions. Join us for a seamless path to success in your legal career.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Vanshika Saini',
      role: 'Ambassador',
      quote: 'Ambassador Vanshika Saini, a dynamic force at Tyson\'s Legal Allies, passionately champions tailored event solutions for success in the legal realm. Join her for an exceptional legal journey.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Aryaman Singh',
      role: 'Operational Head',
      quote: 'As Operational Head, Aryaman Singh leads Tyson\'s Legal Allies with precision, ensuring flawless execution of tailored legal events. Trust him for operational excellence in our dynamic community.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Rithik Shankar',
      role: 'Operational Head',
      quote: 'Operational Head Rithik Shankar ensures flawless execution at Tyson\'s Legal Allies, embodying excellence in leadership and legal event management. ',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Aditya Bachkoti',
      role: 'Project Manager',
      quote: 'Aditya Bachkoti, Tyson\'s Legal Allies Project Manager, leads with strategic vision, ensuring successful project implementation for excellence in our dynamic legal community. ',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Anshika Rathi',
      role: 'IT Cell Head',
      quote: 'Anshika Rathi, Tyson\'s Legal Allies IT Cell Head, leads technological innovation for a seamless digital experience, contributing to excellence in our dynamic community.',
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
      <h2>Office Bearers</h2>
      <Slider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div
              className={`card text-center ${centerCardIndex === index ? 'focused' : 'blurred'}`}
            >
              <img className="card-img-top" src={member.imageSrc} alt={`Team Member - ${index}`} />
              <div className="card-body">
                <h5>
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