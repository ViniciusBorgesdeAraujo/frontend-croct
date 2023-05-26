import React from 'react';
import { Link } from 'react-router-dom';
import croctLogo from './img/croct-logo.jpg';
import developerImage from './img/developer.png';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={croctLogo} alt="Croct Logo" className="logo" />
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item"><a href="#" className="nav-link">Product</a></li>
            <li className="menu-item"><a href="#" className="nav-link">Blog</a></li>
            <li className="menu-item"><a href="#" className="nav-link">Careers</a></li>
          </ul>
        </div>
        <div className="login">
          <a href='#' className="nav-link">Login</a>
          <button className="signup-button">Create your free account</button>
        </div>
      </nav>

      <img src={developerImage} alt="Developer" className="developer-image" />

      <section className="content">
        <h1>
          <span>Upload and cut avatars</span> <br/>by clicking the
        </h1>
        <Link to="/avatar">
          <button className="avatar-upload-button">Go to AvatarUpload</button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-container'>
        <p>
          <span className='bold'>Avatar Uploader</span>
          &copy; 2023
        </p>
        <div className='social-container'>
         <span className="social">Siga-nos:</span>
         <a href="#"><i className="fab fa-facebook fa-2x footericone"></i></a>
         <a href="#"><i className="fab fa-instagram fa-2x footericone"></i></a>
         <a href="#"><i className="fab fa-twitter-square fa-2x footericone"></i></a>
         <a href="#"><i className="fab fa-youtube fa-2x footericone"></i></a>
        </div>
      </div>
    </footer>
    
  );
};

export default Home;
