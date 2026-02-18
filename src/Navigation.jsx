import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/dove_image.png';
import './Css/Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    // Fermer le menu lors du changement de route
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDonation = () => {
    window.open('https://www.paypal.com/donate/?hosted_button_id=7ZUCWRFQZZYPG', '_blank');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Bouton hamburger pour mobile */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Calvary Chapel Logo" className="nav-logo-img" />
          <span className="nav-logo-main">Calvary Chapel <span className="nav-logo-location">Cap-Haïtien</span> </span>
          
        </Link>

        {/* Menu desktop et mobile */}
        <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/Apropos"
                className={isActive('/Apropos') ? 'active' : ''}
                onClick={closeMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/Ministere"
                className={isActive('/Ministere') ? 'active' : ''}
                onClick={closeMenu}
              >
                Ministère
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={isActive('/Contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="btn-donation"
            onClick={() => {
              handleDonation();
              closeMenu();
            }}
          >
            Donation
          </button>
        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant en dehors */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navigation;