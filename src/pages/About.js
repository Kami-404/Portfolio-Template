import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import cat2 from '../images/WebsiteBuild.gif';
import icon1 from '../images/games.png';
import icon2 from '../images/graph.png';
import icon3 from '../images/server.png';
import icon4 from '../images/user.png';

function About() {
  return (
    <div>
      <div className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={cat2} className="cat2" />
            </div>
            <div className="col-md-6">
              <h2>Qui je suis ?</h2>
              <p>Vous vous dites surement comment un chat peut être un développeur ? Alors voici quelqu'uns de mes atouts pour vous
                compreniez que je suis un execellent développeur.
              </p>
              <div className="row mt-4">
                <div className="col-sm-6 mb-3">
                  <div className="d-flex align-items-center">
                    <img src={icon1} className="icon" />
                    <div>
                      <h4>Jeux vidéos</h4>
                      <p>Ma passion pour les jeux vidéos a renforcé ma logique et ma résolution de problèmes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="d-flex align-items-center">
                    <img src={icon2} className="icon" />
                    <div>
                      <h4>Serveurs</h4>
                      <p>J'ai une expertise dans la gestion et l'administration de serveurs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="d-flex align-items-center">
                    <img src={icon3} className="icon" />
                    <div>
                      <h4>Informatique</h4>
                      <p>Ma connaissance approfondie en informatique me permet de développer des solutions innovantes.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="d-flex align-items-center">
                    <img src={icon4} className="icon" />
                    <div>
                      <h4>Communication</h4>
                      <p>Mes compétences en communication facilitent la collaboration et la compréhension des besoins.</p>
                    </div>
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

export default About;
