import React , { useEffect }from 'react';
import $ from 'jquery'; // Make sure to include jQuery
import Slider from 'react-slick';
import './CSS/team.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Team.css'; // Import your CSS file

import Swiper from 'swiper';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Chirag K. Tiwari',
      role: 'Founder & CEO',
      image: 'https://picsum.photos/200',
      social: {
        twitter: '@johndoe',
        linkedin: '/in/johndoe',
        github: '/johndoe',
      },
      description: 'Experienced leader with a strong background in project management and team collaboration. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Vanshika Saini',
      role: 'Ambasssador',
      image: 'https://picsum.photos/200',
      social: {
        twitter: '@janesmith',
        linkedin: '/in/janesmith',
        github: '/janesmith',
      },
      description: 'Passionate developer with expertise in front-end technologies and a creative approach to problem-solving. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 3,
      name: 'Aryaman Singh',
      role: 'Operational Head',
      image: 'https://picsum.photos/200',
      social: {
        twitter: '@janesmith',
        linkedin: '/in/janesmith',
        github: '/janesmith',
      },
      description: 'Passionate developer with expertise in front-end technologies and a creative approach to problem-solving. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 4,
      name: 'Ritik Shankar',
      role: 'Operational Head',
      image: 'https://picsum.photos/200',
      social: {
        twitter: '@janesmith',
        linkedin: '/in/janesmith',
        github: '/janesmith',
      },
      description: 'Passionate developer with expertise in front-end technologies and a creative approach to problem-solving. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 5,
      name: 'Aditya Bachkoti',
      role: 'Project Manager',
      image: 'https://picsum.photos/200',
      social: {
        twitter: '@janesmith',
        linkedin: '/in/janesmith',
        github: '/janesmith',
      },
      description: 'Passionate developer with expertise in front-end technologies and a creative approach to problem-solving. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 6,
      name: 'Anshika Rathi',
      role: 'IT Cell Head',
      image: 'https://picsum.photos/200',
      social: {
        twitter: '@janesmith',
        linkedin: '/in/janesmith',
        github: '/janesmith',
      },
      description: 'Passionate developer with expertise in front-end technologies and a creative approach to problem-solving. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const cardSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Card Slider section */}
      <div className="card-slider-container">
        <Slider {...cardSliderSettings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="card custom-card">
              <img src={member.image} alt={member.name} className="card-image" />
              <div className="card-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="description">{member.description}</p>
                <div className="social-links">
                  <a href={`https://twitter.com/${member.social.twitter}`} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                  <a href={`https://linkedin.com${member.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href={`https://github.com${member.social.github}`} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

);
}

export default Team;