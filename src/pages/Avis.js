import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Avis.css';

function Avis() {
  return (
    <div className="portfolio-wrapper">
      <section className="avis-section text-center">
      <h2>Témoignage clients</h2>
      <p>Voici quelques avis de mes clients.</p>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="avis-box">
                <h3>Emanuel Alexander </h3>
                <p>CEO, Entreprise A</p>
                <p>"Excellent service, très satisfait."</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="avis-box">
                <h3>Arnold Austin </h3>
                <p>Manager, Entreprise B</p>
                <p>"Travail exceptionnel, très professionnel."</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="avis-box">
                <h3>David Blair </h3>
                <p>Directeur Marketing, Entreprise C</p>
                <p>"Service de qualité, hautement recommandé."</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="avis-box">
                <h3>Emmett Maxwell </h3>
                <p>CTO, Entreprise D</p>
                <p>"Une équipe professionnelle et réactive."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avis;
