import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
     
      <button className="navbar-t" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto"> 
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link> 
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
