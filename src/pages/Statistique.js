import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Statistique.css';

function Statistique() {
  return (
    <div className="portfolio-wrapper">
      <div className="container text-center py-5">
        <h2>Statistiques</h2>
        <p>Mes services représenter par des chiffres.</p>
        <div className="row">
          <div className="col-md-4 text-center">
            <p className="display-1 mb-0">43</p>
            <p>projets réalisés</p>
          </div>
          <div className="col-md-4 text-center">
            <p className="display-1 mb-0">32</p>
            <p>clients</p>
          </div>
          <div className="col-md-4 text-center">
            <p className="display-1 mb-0">100%</p>
            <p>Taux de satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistique;
