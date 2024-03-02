import React from 'react';
import './CSS/footer.css';

function Footer() {
  return (
    <div className="container-fluid footer-container">
      <div className="row footer-row">
        <div className="footer-div col-md-4 mb-4">
          <h2 className='footer-h2'>Tyson</h2>
          <p className='footer-p footer-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem omnis repellendus ab culpa, magnam, repellat eius amet similique architecto dolores iusto corrupti alias? Possimus similique officiis tempore beatae optio rem.Description about the company</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="footer-icon fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="footer-icon fab fa-instagram"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="footer-icon fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-div col-md-4 mb-4">
          <h2 className='footer-h2'>Quick Contact</h2>
          <p className='footer-p footer-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam aut debitis sint placeat ullam ipsam at explicabo suscipit recusandae impedit illo, dolore voluptatem ut, expedita eum eveniet numquam quibusdam.Quick contact info and some description</p>
          <p className='footer-p footer-para'>Contact Details: example@example.com | (123) 456-7890</p>
        </div>
        <div className="footer-div col-md-4 mb-4">
          <h2 className='footer-h2'>Our Presence</h2>
          <p className='footer-p'>Dehradun <br/> Kolkata <br />Chandigarh <br />Haridwar <br />Kanpur <br />Lucknow <br />Unnao <br />Saharanpur <br />Muzaffarnagar <br />Roorkee <br /></p>
        </div>
      </div>
      <div className="row">
        <div className="footer-copy-div col-12 text-center">
          <p className='footer-copy'> Copyright &copy; 2024 Tyson All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
