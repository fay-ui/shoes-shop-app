// Footer.js
import React from 'react';


function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
         

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" target="_blank" className="text-white mr-3" aria-label="Facebook" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <br />
            <a href="https://www.twitter.com" target="_blank" className="text-white mr-3" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <br />
            <a href="https://www.instagram.com" target="_blank" className="text-white" aria-label="Instagram" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <br />
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 shoe shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
