import React from 'react';
import './CSS/services.css';
import ClientConsulation from "./images/client_consultation.png";
import Mentor from "./images/mentor.png";
import EventManagement from "./images/event-management.png";
import Assistance from "./images/assistance.png";
import Certificate from "./images/certificate.png";

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <p className='what'>What We Do</p>
        <p className='caption'>Empowering Futures: Legal Mentoring, Expert Advice.</p>
      </div>
      <div className="row services-row">
        {/* Service 1 */}
        <div className="col-md-4 mb-4">
          <div className="service-box">
            <div className="service-content">
              <h4 className='service-h4'>CLIENT CONSULTATION</h4>
              <img src={ClientConsulation} alt="client consultation" className="service-image" loading="lazy" />

              <p className='service-caption'>Your legal journey starts with insightful client consultations for success.</p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4 mb-4">
          <div className="service-box">
            <div className="service-content">
              <h4 className='service-h4'>MENTORING</h4>
              <img src={Mentor} alt="mentoring" className="service-image" loading='lazy' />
              <p className='service-caption'>Empowering Legal Minds: Mentorship for Your Success Journey.</p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4 mb-4">
          <div className="service-box">
            <div className="service-content">
              <h4 className='service-h4'>EVENT MANAGEMENT</h4>
              <img src={EventManagement} alt="event management" className="service-image" loading='lazy' />
              <p className='service-caption'>Crafting Legal Experiences: Events Tailored for Excellence and Engagement.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row services-row">
        {/* Service 4 */}
        <div className="col-md-6 mb-4">
          <div className="service-box">
            <div className="service-content">
              <h4 className='service-h4'>ASSISTANCE</h4>
              <img src={Assistance} alt="assistance" className="service-image" loading='lazy' />
              <p className='service-caption'>Guiding Your Legal Path: Comprehensive Assistance Tailored for Your Success.</p>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="col-md-6 mb-4">
          <div className="service-box">
            <div className="service-content">
              <h4 className='service-h4'>CERTIFICATIONS</h4>
              <img src={Certificate} alt="certificate" className="service-image" loading='lazy' />
              <p className='service-caption'>Unlock Your Potential: Certifications Tailored for Legal Excellence and Growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
