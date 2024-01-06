import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import youtube from '../images/youtube.png';
import google from '../images/google.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

function Footer() {
  return (
    <div>
      <footer className="footer-section bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Portfolio Template</h3>
              <p>Merci d'avoir visité mon portfolio. Même les chats peuvent être d'excellent développeur.</p>
            </div>
            <div className="col-md-6">
              <div className="social-icons">
                <a href="#"><img src={youtube} className='network'/></a>
                <a href="#"><img src={linkedin} className='network'/></a>
                <a href="#"><img src={instagram} className='network'/></a>
                <a href="#"><img src={google} className='network' /></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2022. Tous droits réservés.</p>
            </div>
            <div className="col-md-6">
              <ul className="footer-menu">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Mes services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
