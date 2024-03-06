import React from 'react';
import './CSS/footer.css';

function Footer() {
  return (
    <div className="container-fluid footer-container">
      <div className="row footer-row">
        <div className="footer-div col-md-4 mb-4">
          <h2 className='footer-h2'>Tysons</h2>
          <p className='footer-p footer-para'>Tysons – Elevating Legal Excellence. Our commitment to unparalleled solutions, client-centricity, and seamless success defines your legal journey with us. Trust Tysons for a distinguished legal future.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="footer-icon fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="footer-icon fab fa-instagram"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="footer-icon fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-div col-md-4 mb-4">
          <h2 className='footer-h2'>Quick Contact</h2>
          <p className='footer-p footer-para'>At Tysons, we understand that your questions are at the heart of our commitment. Feel free to reach out to us for swift assistance and the valuable information you seek.</p>
          <p className='footer-p footer-para'>Contact Details: <br /><br /><i className="footer-icon far fa-envelope"></i> grouptysons@gmail.com <br /><br /><i className="footer-icon fas fa-phone"></i> +91-9451816645</p>
        </div>
        <div className="footer-div col-md-4 mb-4">
          <h2 className='footer-h2'>Our Presence</h2>
          <p className='footer-p'>Dehradun <br/> Kolkata <br />Chandigarh <br />Haridwar <br />Kanpur <br />Lucknow <br />Unnao <br />Saharanpur <br />Muzaffarnagar <br />Roorkee <br /></p>
        </div>
      </div>
      <div className="row">
        <div className="footer-copy-div col-12 text-center">
          <p className='footer-copy'> Copyright &copy;  2024 Tysons Legal Allies. All rights reserved. Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
