import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Contact.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="contact-page">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Contactez-nous</h1>
        </div>

        {/* Contact Content */}
        <div className="contact-content">

          {/* Notre Adresse */}
          <div className="contact-card">
            <h2 className="card-title">Notre Adresse</h2>
            <div className="card-content">
              <div className="info-item">
                <MdLocationOn size={24} color="#D4AF37" />
                <div className="info-text">
                  <p>Rue Breda Oasis #5, Haut du Cap</p>
                  <p>Cap-Haïtien, Haiti</p>
                </div>
              </div>
            </div>
          </div>

          {/* Heures de Service */}
          <div className="contact-card">
            <h2 className="card-title">Heures de Service</h2>
            <div className="card-content">
              <div className="info-item">
                <MdAccessTime size={24} color="#D4AF37" />
                <div className="info-text">
                  <p className="day-label">Dimanche</p>
                  <p className="time-text">8:00 AM - 9:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Téléphone */}
          <div className="contact-card">
            <h2 className="card-title">Téléphone</h2>
            <div className="card-content">
              <div className="info-item">
                <MdPhone size={24} color="#D4AF37" />
                <div className="info-text">
                  <p>(+509) 2228 6083</p>
                  <p>(+509) 4769 7777</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="contact-card">
            <h2 className="card-title">WhatsApp</h2>
            <div className="card-content">
              <div className="info-item">
                <FaWhatsapp size={24} color="#25D366" />
                <div className="info-text">
                  <p>(+509) 4769 7777</p>
                  <p className="whatsapp-note">Envoyez "Bible" pour rejoindre</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;