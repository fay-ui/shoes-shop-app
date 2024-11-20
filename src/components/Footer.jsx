import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" target="_blank" className="text-white mr-3" aria-label="Facebook" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" className="text-white mr-3" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" className="text-white" aria-label="Instagram" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Shoe Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
