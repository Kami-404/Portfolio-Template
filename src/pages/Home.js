import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import cat from '../images/working.png';
import logo from '../images/logo.png';

function Home() {
  return (
    <div>
      <div className="header-section">
        <nav className="navbar navbar-expand-md navbar-light justify-content-between">
          <div>
            <a className="navbar-brand" href="#">
              <img src={logo} className="logo" />
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#">A propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Mes services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>George Stone</h1>
              <p>Bienvenue sur mon portfolio ! Je suis un chat, et je suis passionné par la création d'applications web innovantes.
                Dans l'objectif de vous faire connaitre qui je suis, j'ai créer ce portfolio. Amusez vous bien ! 
              </p>
              <button>Contacter moi</button>
              <button>Télécharger mon CV</button>
            </div>
            <div className="col-md-6">
              <img src={cat} className="cat" alt="Image de chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
