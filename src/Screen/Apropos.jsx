import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation';
import '../Css/Apropos.css';
import Footer from '../Footer';
import LogoCalvaryChapel from '../assets/LogoCalvaryChapel.png';

const Apropos = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="apropos-page">
      {/* Header Navigation */}
      <Navigation />

      {/* Hero Section with Animated Logo */}
      <section className="hero-section" id="hero">
        <div className="hero-background-apropos">
          <img src={LogoCalvaryChapel} alt="Calvary Chapel Logo" className="hero-logo-bg-apropos" />
          <div className="hero-logo-particles">
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
          </div>
        </div>
        <div className="hero-overlay-apropos"></div>
        <div className="hero-content">
          <div className="hero-logo-main">
            <img src={LogoCalvaryChapel} alt="Calvary Chapel" className="logo-main-img" />
          </div>
          <h2 className="hero-title">À propos de nous</h2>
          <div className="hero-subtitle">Calvary Chapel Cap-Haïtien</div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section" id="notre-histoire">
        <h3 className="section-title">Notre histoire</h3>
        <div className="history-content">
          <p>En 1965, dans l'État de Californie, plus précisément à Costa Mesa, un petit groupe de 25 personnes dirigé par le Pasteur Chuck Smith, lance le premier Calvary Chapel. Aujourd'hui, c'est plus de 850 églises en Amérique du Nord, 200 autres, en Amérique du Sud, en Europe, Afrique, Asie et Australie.</p>
          
          <p>Voulant perpétuer les principes de Calvary Chapel et sentant le besoin de partager leur compréhension du message divin à leurs frères et sœurs haïtiens, Seige et Dinette Porteau se sont engagés, après plus de vingt (20) ans aux États-Unis, à retourner dans leur pays d'origine.</p>
          
          <p>Sitôt arrivés, ils ont lancé deux Études Bibliques dans deux maisons différentes et Dieu a permis que l'œuvre grandisse, au point de pouvoir recevoir, par service, en son local à Puits-Blain 12, près de six cents (600) personnes.</p>
        </div>
      </section>

      {/* Credo Section */}
      <section className="credo-section" id="notre-credo">
        {/* Affiliation Banner */}
        <div className="affiliation-banner">
          <div className="affiliation-line"></div>
          <div className="affiliation-content">
            <span className="affiliation-church">Calvary Chapel Cap-Haïtien</span>
            <div className="affiliation-divider">
              <span className="affiliation-dot"></span>
              <span className="affiliation-dot"></span>
              <span className="affiliation-dot"></span>
            </div>
            <span className="affiliation-label">Annexe officielle de</span>
            <span className="affiliation-church">Calvary Chapel Port-au-Prince</span>
            <div className="affiliation-divider">
              <span className="affiliation-dot"></span>
              <span className="affiliation-dot"></span>
              <span className="affiliation-dot"></span>
            </div>
            <span className="affiliation-pastor-label">Sous la direction du</span>
            <span className="affiliation-pastor-name">Pasteur Fenel JOCELIN</span>
          </div>
          <div className="affiliation-line"></div>
        </div>
        <h3 className="section-title">Notre Crédo</h3>
        
        <p className="credo-intro">À Calvary Chapel Cap-Haïtien, nous croyons:</p>
        
        <div className="credo-grid">
          <div className="credo-card">
            <div className="credo-logo-image">
              <img src={LogoCalvaryChapel} alt="Logo" className="credo-logo" />
            </div>
            <div className="credo-number">1</div>
            <p className="credo-text">En un Dieu unique, existant en trois personnes: le Père, le Fils et le Saint-Esprit. Qu'ils sont égaux en puissance et gloire et que ce Dieu trinitaire, créateur de toute chose, a le pouvoir de tenir en place et de gouverner aussi toute chose.</p>
          </div>

          <div className="credo-card">
            <div className="credo-logo-image">
              <img src={LogoCalvaryChapel} alt="Logo" className="credo-logo" />
            </div>
            <div className="credo-number">2</div>
            <p className="credo-text">Que la Bible est la parole inspirée et autoritaire de Dieu.</p>
          </div>

          <div className="credo-card">
            <div className="credo-logo-image">
              <img src={LogoCalvaryChapel} alt="Logo" className="credo-logo" />
            </div>
            <div className="credo-number">3</div>
            <p className="credo-text">Que Dieu le père est intéressé avec beaucoup de grâce aux affaires des hommes. Qu'il écoute, répond aux prières, et sauve du péché et de la mort tous ceux qui viennent à lui au travers de son fils Jésus-Christ.</p>
          </div>

          <div className="credo-card">
            <div className="credo-logo-image">
              <img src={LogoCalvaryChapel} alt="Logo" className="credo-logo" />
            </div>
            <div className="credo-number">4</div>
            <p className="credo-text">Que Jésus-Christ, conçu par la vierge Marie, est le Fils de Dieu. Il s'est fait homme et a vécu sans péché. Qu'il est pleinement homme, qu'il est mort sur la croix pour la rémission de nos péchés et est ressuscité le troisième jour. Maintenant il est assis à la droite du Père, intercédant pour les croyants en qualité de Médiateur.</p>
          </div>

          <div className="credo-card">
            <div className="credo-logo-image">
              <img src={LogoCalvaryChapel} alt="Logo" className="credo-logo" />
            </div>
            <div className="credo-number">5</div>
            <p className="credo-text">Que le Saint-Esprit convainc le monde de son péché, de la justice et du jugement de Dieu. Qu'il régénère, sanctifie et donne puissance pour le ministère à tous ceux qui croient en Jésus-Christ, en attribuant les dons spirituels aux saints de l'Église pour l'édification commune.</p>
          </div>

          <div className="credo-card">
            <div className="credo-logo-image">
              <img src={LogoCalvaryChapel} alt="Logo" className="credo-logo" />
            </div>
            <div className="credo-number">6</div>
            <p className="credo-text">Que nous sommes sauvés par grâce, par le moyen de la foi en Jésus-Christ, Fils de Dieu et Dieu, mort et ressuscité pour le salut de quiconque croit.</p>
          </div>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="pastors-section" id="notre-leader">
        <h3 className="section-title">Notre Leader</h3>
        <div className="pastor-featured-card">
          <div className="pastor-featured-left">

            {/* Anneau doré avec logo Calvary Chapel */}
            <div className="pastor-avatar-ring">
              <div className="pastor-avatar-inner">
                <div className="pastor-logo-wrapper">
                  <img
                    src={LogoCalvaryChapel}
                    alt="Calvary Chapel"
                    className="pastor-avatar-logo"
                  />
                  {/* Halo lumineux animé */}
                  <div className="pastor-logo-glow" />
                </div>
              </div>
            </div>

            {/* Décoration sous le rond */}
            <div className="pastor-featured-decoration">
              <span className="pastor-deco-line"></span>
              <span className="pastor-deco-cross">✦</span>
              <span className="pastor-deco-line"></span>
            </div>

          </div>

          <div className="pastor-featured-right">
            <span className="pastor-featured-label">Pasteur de l'Église</span>
            <h4 className="pastor-featured-name">Pasteur Phanfy SUCCÈS</h4>
            <div className="pastor-featured-divider"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apropos;