import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import contact from '../images/Email.gif';

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={contact} className="email-gif" />
            </div>
            <div className="col-md-6">
              <h2>Contactez-moi</h2>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nom" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Prénom" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nom de l'entreprise" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" placeholder="Votre message"></textarea>
                </div>
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
