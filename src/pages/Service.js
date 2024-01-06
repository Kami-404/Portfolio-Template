import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import service1 from '../images/image1.jpg';
import service2 from '../images/image2.jpg';
import service3 from '../images/image3.jpg';
import service4 from '../images/image4.jpg';
import service5 from '../images/image5.jpg';
import service6 from '../images/image6.jpg';

function Service() {
  return (
    <div className="portfolio-wrapper">
      <div className="service-section text-center py-5">
        <div className="container">
          <h2>Mes Services</h2>
          <p>Voici ce que je propose pour répondre à vos besoins.</p>
          <div className="row">
          <div className="col-md-4 mb-4">
              <div className="service-container">
                <div className="service-hover">
                  <img src={service1} className="service-image" />
                  <div className="service-text">
                    <p>Création de Interfaces Utilisateurs Innovantes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-container">
                <div className="service-hover">
                  <img src={service2} className="service-image" />
                  <div className="service-text">
                    <p>Architecture et Développement Back-End</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-container">
                <div className="service-hover">
                  <img src={service3} className="service-image" />
                  <div className="service-text">
                    <p>Création d'Applications Mobiles Intuitives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
          <div className="col-md-4 mb-4">
              <div className="service-container">
                <div className="service-hover">
                  <img src={service4} className="service-image" />
                  <div className="service-text">
                    <p>Création d'Interfaces API Puissantes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-container">
                <div className="service-hover">
                  <img src={service5} className="service-image" />
                  <div className="service-text">
                    <p>Sécurité et Audit des Applications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-container">
                <div className="service-hover">
                  <img src={service6} className="service-image" />
                  <div className="service-text">
                    <p>Optimisation des Performances et de la Vitesse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
