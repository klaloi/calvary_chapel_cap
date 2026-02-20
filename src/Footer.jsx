import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-col">
          <h4 className="footer-col-title">Calvary Chapel</h4>
          <ul className="footer-list">
            <li>
              <a
                href="/Apropos#notre-histoire"
                className="footer-link"
                onClick={(e) => { e.preventDefault(); goTo('/Apropos#notre-histoire'); }}
              >
                Notre Histoire
              </a>
            </li>
            <li>
              <a
                href="/Apropos#notre-credo"
                className="footer-link"
                onClick={(e) => { e.preventDefault(); goTo('/Apropos#notre-credo'); }}
              >
                Notre Crédo
              </a>
            </li>
            <li>
              <a
                href="/Apropos#notre-leader"
                className="footer-link"
                onClick={(e) => { e.preventDefault(); goTo('/Apropos#notre-leader'); }}
              >
                Notre Leader
              </a>
            </li>

          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Liens Rapides</h4>
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">Accueil</Link>
            </li>
            <li>
              <Link to="/Apropos" className="footer-link">À Propos</Link>
            </li>
            <li>
              <Link to="/Ministere" className="footer-link">Ministères</Link>
            </li>
            <li>
              <Link to="/Contact" className="footer-link">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Nos Ministères</h4>
          <ul className="footer-list">
            <li>
              <a
                href="https://uespoir.edu.ht/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Université Espoir
              </a>
            </li>
            <li>
              <a
                href="https://laparolequichange.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                La Parole Qui Change
              </a>
            </li>
            <li>
              <a
                href="https://lapawoli.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LaPawoli
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contact Info</h4>
          <ul className="footer-list footer-contact-list">
            <li className="footer-contact-item">
              <span className="footer-contact-label">Adresse</span>
              <span className="footer-contact-value">
                Rue Breda Oasis 5, Haut du Cap, Cap-Haitien, Haiti
              </span>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-label">Téléphone</span>
              <a href="tel:+50940850404" className="footer-link footer-contact-value">
                (+509) 4085 - 0404
              </a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-label">Email</span>
              <a
                href="mailto:contact@calvarychapelcaphaitian.org"
                className="footer-link footer-contact-value"
              >
                calvarychapelcaphaitien@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">

        {/* <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon tiktok"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vb6sJ7eAYlUKx342ux0w"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon whatsapp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div> */}

        <p className="footer-copyright">
          2026 Calvary Chapel Cap-Haitien. Tous droits reserves.
        </p>

      </div>
    </footer>
  );
};

export default Footer;