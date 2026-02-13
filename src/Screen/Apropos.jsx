import React from 'react';
import Navigation from '../Navigation';
import '../Css/Apropos.css';
import Footer from '../Footer';
import LogoCalvaryChapel from '../assets/LogoCalvaryChapel.png';

const Apropos = () => {
  return (
    <div className="apropos-page">
      {/* Header Navigation */}
      <Navigation />

      {/* Hero Section with Animated Logo */}
      <section className="hero-section">
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
      <section className="history-section">
        <h3 className="section-title">Notre histoire</h3>
        <div className="history-content">
          <p>En 1965, dans l'État de Californie, plus précisément à Costa Mesa, un petit groupe de 25 personnes dirigé par le Pasteur Chuck Smith, lance le premier Calvary Chapel. Aujourd'hui, c'est plus de 850 églises en Amérique du Nord, 200 autres, en Amérique du Sud, en Europe, Afrique, Asie et Australie.</p>
          
          <p>Voulant perpétuer les principes de Calvary Chapel et sentant le besoin de partager leur compréhension du message divin à leurs frères et sœurs haïtiens, Seige et Dinette Porteau se sont engagés, après plus de vingt (20) ans aux États-Unis, à retourner dans leur pays d'origine.</p>
          
          <p>Sitôt arrivés, ils ont lancé deux Études Bibliques dans deux maisons différentes et Dieu a permis que l'œuvre grandisse, au point de pouvoir recevoir, par service, en son local à Puits-Blain 12, près de six cents (600) personnes.</p>
        </div>
      </section>

      {/* Credo Section */}
      <section className="credo-section">
        <h3 className="section-title">Notre Credo</h3>
        <p className="credo-intro">À Calvary Chapel Port-au-Prince, nous croyons:</p>
        
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
      <section className="pastors-section">
        <h3 className="section-title">Notre Leader</h3>
        <div className="pastors-grid">
          <div className="pastor-card">
            <h4 className="pastor-name">Pasteur Seige Poteau</h4>
            <p className="pastor-quote">"Croyez en Dieu! Ensuite, exercez vos propres capacités! Mais, sans une foi sincère et inébranlable dans la toute-puissance du Seigneur, vous ne pourrez pas atteindre vos objectifs. Mettez simplement Jésus en premier en recherchant la paix, la santification. Et Les bénédictions suivront."</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apropos;