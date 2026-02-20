import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Apropos from './Screen/Apropos';
import Ministere from './Screen/Ministere';
import Contact from './Screen/Contact';
import UEspoirLogo from './assets/UEspoir.png';
import LaParoleQuiChangeLogo from './assets/LaParolequiChange.png';
import PasteurSeige from "./assets/PasteurSeige.png";
import LogoCalvaryChapel from './assets/LogoCalvaryChapel.png';
import CitadelleImage from './assets/citadelle2.jpg.jpeg';
import LapawoliLogo from './assets/Lapawoli.jpeg';
import CCPSLogo from './assets/CCPS.png';
import CalvaryPAPLogo from './assets/Calvary_chapel_pap.png';

// ─── Modal pour CCPS ───────────────────────────────────────────────
const CCPSModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const formations = [
    { icon: "🔲", label: "Carrelage" },
    { icon: "🔧", label: "Plomberie" },
    { icon: "💻", label: "Informatique" },
    { icon: "🌐", label: "Anglais" },
    { icon: "⚡", label: "Électricité" },
    { icon: "🪟", label: "Techniques Windows" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>

        {/* Bouton fermer — toujours visible, position fixe dans le conteneur */}
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* ── Zone scrollable ── */}
        <div className="modal-scroll">

          {/* Header image */}
          <div className="modal-image-wrapper">
            <img
              src={CCPSLogo}
              alt="Calvary Christian Professional School"
              className="modal-logo-full"
            />
            <div className="modal-image-gradient" />
            {/* Titre en overlay sur l'image */}
            <div className="modal-image-title">
              <h2 className="modal-title">
                Calvary Christian<br />
                <span>Professional School</span>
              </h2>
            </div>
          </div>

          {/* ── Corps ── */}
          <div className="modal-content">

            {/* Divider doré */}
            <div className="modal-divider">
              <span className="modal-divider-gem">✦</span>
            </div>

            {/* Chiffres clés */}
            <div className="modal-stat-row">
              <div className="modal-stat">
                <span className="modal-stat-number">
                  4 500<span className="modal-stat-plus">+</span>
                </span>
                <span className="modal-stat-label">Diplômés depuis 2007</span>
              </div>
              <div className="modal-stat-sep" />
              <div className="modal-stat">
                <span className="modal-stat-number">6</span>
                <span className="modal-stat-label">Filières de formation</span>
              </div>
              <div className="modal-stat-sep" />
              <div className="modal-stat">
                <span className="modal-stat-number">2007</span>
                <span className="modal-stat-label">Année de fondation</span>
              </div>
            </div>

            {/* Histoire */}
            <div className="modal-section">
              <h3 className="modal-section-title">
                <span className="modal-section-line" />
                Notre Histoire
                <span className="modal-section-line" />
              </h3>
              <p className="modal-description">
                Fondée en juin <strong>2007</strong> par le Pasteur Seige Poteau, Calvary Christian Professional School (CCPS) a vu le jour dans les locaux de l'église situés à l'époque au <strong>#1, rue Price Mars</strong>.
              </p>
              <p className="modal-description">
                Dès son ouverture, l'institution proposait des formations en anglais, auto-école et informatique. Au-delà de l'acquisition de compétences pratiques, la mission première de CCPS a toujours été claire : <em>former des professionnels compétents tout en partageant les valeurs chrétiennes à travers l'évangélisation.</em>
              </p>
            </div>

            {/* Formations */}
            <div className="modal-section">
              <h3 className="modal-section-title">
                <span className="modal-section-line" />
                Nos Formations
                <span className="modal-section-line" />
              </h3>
              <p className="modal-description">
                Aujourd'hui, CCPS élargit son offre et propose des cours professionnels dans les domaines suivants :
              </p>
              <div className="modal-formations-grid">
                {formations.map((f, i) => (
                  <div key={i} className="modal-formation-item">
                    <span className="modal-formation-icon">{f.icon}</span>
                    <span className="modal-formation-label">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="modal-section">
              <h3 className="modal-section-title">
                <span className="modal-section-line" />
                Notre Impact
                <span className="modal-section-line" />
              </h3>
              <p className="modal-description">
                Depuis sa création, l'école a formé et diplômé <strong>plus de 4 500 étudiants</strong>, contribuant au développement professionnel et personnel de milliers de jeunes et d'adultes en Haïti.
              </p>
            </div>

            {/* Verset
            <div className="modal-verse">
              <span className="modal-verse-icon">❝</span>
              <p>"Instruire le sage, et il deviendra encore plus sage ; enseigne le juste, et il augmentera son savoir."</p>
              <span className="modal-verse-ref">Proverbes 9 : 9</span>
            </div> */}

          </div>
        </div>{/* fin modal-scroll */}
      </div>
    </div>
  );
};

// ─── Hero Section ──────────────────────────────────────────────────
const HeroSection = () => (
  <section className="hero">
    <div className="hero-background">
      <img src={CitadelleImage} alt="Citadelle" className="hero-citadelle-bg" />
    </div>
    <div className="hero-overlay" />
    <div className="hero-content">
      <div className="hero-icon">
        <img src={LogoCalvaryChapel} alt="Logo" className="hero-icon-img" />
      </div>
      <h2 className="hero-welcome">Bienvenue à</h2>
      <h1 className="hero-title">
        <span className="title-primary">Calvary Chapel</span>
        <br />
        <span className="title-secondary">Cap-Haïtien</span>
      </h1>
      <p className="hero-description">
        Calvary Chapel Cap-Haïtien est une Église Chrétienne se démarquant de toute
        dénomination. Ce qui nous caractérise c'est l'Enseignement de la Parole de Dieu : Livre par
        Livre, Chapitre par Chapitre et Verset par Verset. Notre objectif unique est de faire des
        disciples pour Christ et de les rendre disponibles afin que le Saint-Esprit puisse les utiliser à
        toute bonne œuvre.
      </p>
      <div className="hero-verse-block">
        <span className="hero-verse-icon">✦</span>
        <blockquote className="hero-verse-text">
          "Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain, et dans les prières."
        </blockquote>
        <span className="hero-verse-ref">Actes 2 : 42</span>
      </div>
      <Link to="/Apropos">
        <button className="btn-primary">En savoir plus</button>
      </Link>
    </div>
  </section>
);

// ─── Profession de Foi ─────────────────────────────────────────────
const FaithStatement = () => {
  const faithPoints = [
    {
      number: "1",
      title: "Foi",
      description: "Nous croyons en un Dieu unique, existant en trois personnes : le Père, le Fils, et le Saint-Esprit ; qu'ils sont égaux en puissance et en gloire et que ce Dieu trinitaire, créateur de toute chose, a le pouvoir en place et de gouverner aussi toute chose."
    },
    {
      number: "2",
      title: "Amour",
      description: "Nous croyons que nous sommes sauvés par grâce, par le moyen de la foi en Jésus Christ, Fils de Dieu et Dieu, mort et ressuscité pour le salut de quiconque croit."
    },
    {
      number: "3",
      title: "La Parole",
      description: "Nous croyons que la Bible est la parole de Dieu inspirée et autoritaire de Dieu."
    },
    {
      number: "4",
      title: "Unité",
      description: "Nous croyons en l'unité de l'esprit par le lien de la paix."
    }
  ];

  return (
    <section className="faith-section">
      <h2 className="section-title">Notre profession de foi</h2>
      <div className="faith-grid">
        {faithPoints.map((point) => (
          <div key={point.number} className="faith-card">
            <div className="faith-number">{point.number}</div>
            <h3 className="faith-title">{point.title}</h3>
            <p className="faith-description">{point.description}</p>
          </div>
        ))}
      </div>
      <Link to="/Apropos">
        <button className="btn-primary centered">En savoir plus</button>
      </Link>
    </section>
  );
};

// ─── Ministères ────────────────────────────────────────────────────
const Ministries = () => {
  const [ccpsModalOpen, setCcpsModalOpen] = React.useState(false);

  const handleLearnMore = (link) => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  };

  const ministriesLogos = [
    {
      name: "Université Espoir",
      image: UEspoirLogo,
      link: "https://uespoir.edu.ht/",
      type: "external"
    },
    {
      name: "La Parole qui Change",
      image: LaParoleQuiChangeLogo,
      link: "https://laparolequichange.org/",
      type: "external"
    },
    {
      name: "Lapawoli",
      image: LapawoliLogo,
      link: "https://www.lapawoli.com/",
      type: "external"
    },
    {
      name: "CCPS",
      image: CCPSLogo,
      type: "modal"
    },
    {
      name: "Calvary Chapel Port-au-Prince",
      image: CalvaryPAPLogo,
      link: "https://www.calvarypap.org/",
      type: "external"
    },
  ];

  return (
    <section className="ministries-section">
      <h2 className="section-title">Nos Ministères</h2>
      <p className="section-subtitle">Grandir et Servir Ensemble</p>

      <p className="ministries-footer">
        Explorez les différents ministères de notre église et trouvez votre place dans notre communauté.
      </p>

      <div className="ministries-logos ministries-logos-5">
        {ministriesLogos.map((ministry, index) => (
          <div key={index} className="ministry-logo-card">
            <div className="logo-container">
              {ministry.image ? (
                <img
                  src={ministry.image}
                  alt={ministry.name}
                  className="ministry-logo-image"
                />
              ) : (
                <div className="logo-placeholder-text">{ministry.name}</div>
              )}
            </div>
            <h3 className="ministry-logo-name">{ministry.name}</h3>
            <button
              className="btn-secondary"
              onClick={() => {
                if (ministry.type === 'modal') {
                  setCcpsModalOpen(true);
                } else {
                  handleLearnMore(ministry.link);
                }
              }}
            >
              En savoir plus
            </button>
          </div>
        ))}
      </div>

      <CCPSModal isOpen={ccpsModalOpen} onClose={() => setCcpsModalOpen(false)} />
    </section>
  );
};

// ─── Leaders ───────────────────────────────────────────────────────
const Leaders = () => {
  const leaders = [
    {
      name: "Pasteur Seige P.",
      title: "Pasteur Fondateur",
      image: PasteurSeige
    },
  ];

  return (
    <section className="leaders-section">
      <h2 className="section-title">Notre Leader</h2>
      <div className="leaders-grid">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <img
              src={leader.image}
              alt={leader.name}
              className="leader-image"
            />
            <h3 className="leader-name">{leader.name}</h3>
            <p className="leader-title">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Page d'accueil ────────────────────────────────────────────────
const HomePage = () => (
  <>
    <Navigation />
    <HeroSection />
    <FaithStatement />
    <Ministries />
    <Leaders />
    <Footer />
  </>
);

// ─── App principal ─────────────────────────────────────────────────
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Ministere" element={<Ministere />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;