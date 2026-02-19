import React from 'react';
import '../Css/Contact.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime, MdPhone } from 'react-icons/md';
import ChannelQR from '../assets/channel-ccpap.png';

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
            <h2 className="card-title">Études Bibliques</h2>
            <div className="card-content">
              <div className="info-item">
                <MdAccessTime size={24} color="#D4AF37" />
                <div className="info-text">
                  <p className="day-label">Samedi</p>
                  <p className="time-text">4hres PM - 5:30 PM</p>
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
                  <p>(+509) 4085 - 0404</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="contact-card">
            <h2 className="card-title">WhatsApp</h2>
            <div className="card-content">
              <div className="whatsapp-channel-block">

                <div className="whatsapp-channel-left">
                  <div className="info-item">
                    <FaWhatsapp size={24} color="#25D366" />
                    <div className="info-text">
                      <p className="whatsapp-channel-label">Rejoignez notre canal officiel</p>
                    </div>
                  </div>
                  <a
                    href="https://whatsapp.com/channel/0029Vb6sJ7eAYlUKx342ux0w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    <FaWhatsapp size={18} />
                    Rejoindre le Canal
                  </a>
                </div>

                <div className="whatsapp-channel-right">
                  <div className="qr-wrapper">
                    <img
                      src={ChannelQR}
                      alt="QR Code Canal WhatsApp"
                      className="whatsapp-qr"
                    />
                    <span className="qr-label">Scanner pour rejoindre</span>
                  </div>
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