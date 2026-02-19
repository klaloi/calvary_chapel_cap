import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer'; // Import du Footer
import Apropos from './Screen/Apropos';
import Ministere from './Screen/Ministere';
import Contact from './Screen/Contact';
import UEspoirLogo from './assets/UEspoir.png';
import LaParoleQuiChangeLogo from './assets/LaParolequiChange.png';
import PasteurSeige from "./assets/PasteurSeige.png";


import LogoCalvaryChapel from './assets/LogoCalvaryChapel.png';

//Composant Hero Section
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={LogoCalvaryChapel} alt="Calvary Chapel Logo" className="hero-logo-bg" />
      </div>
      <div className="hero-overlay"></div>
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
          La Calvary Chapel Cap-Haïtien est une Église Chrétienne se démarquant de toute 
          dénomination. Ce qui nous caractérise c'est l'Enseignement de la Parole de Dieu: Livre par 
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
};
//Composant Profession de Foi
const FaithStatement = () => {
  const faithPoints = [
    {
      number: "1",
      title: "Foi",
      description: "Nous croyons en un Dieu unique, existant en trois personnes: le Père, le Fils, et le Saint-Esprit; qu'ils sont égaux en puissance et en gloire et que ce Dieu trinitaire, créateur de toute chose, a le pouvoir en place et de gouverner aussi toute chose."
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

//Composant Ministères
const Ministries = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const ministries = [
    {
      title: "Accueil",
      description: "Pour offrir un espace chaleureux et bienveillant ; Adoration, pour conduire chacun dans une louange authentique et vivante;"
    },
  ];

  const ministriesLogos = [
    { 
      name: "Université Espoir", 
      image: UEspoirLogo,
      link: "https://uespoir.edu.ht/"
    },
    { 
      name: "La parole qui change", 
      image: LaParoleQuiChangeLogo,
      link: "https://laparolequichange.org/"
    },
  ];

  const handleLearnMore = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="ministries-section">
      <h2 className="section-title">Nos Ministères</h2>
      <p className="section-subtitle">Grandir et Servir Ensemble</p>
      
      <div className="ministries-content">
        <div className="ministries-list">
          {ministries.map((ministry, index) => (
            <div key={index} className="ministry-item">
              <div className="ministry-number">{index + 1}</div>
              <div className="ministry-info">
                <h3 className="ministry-title">{ministry.title}</h3>
                <p className="ministry-description">{ministry.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="ministry-slider">
          <button className="slider-btn prev" onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}>‹</button>
          <div className="slider-content">
            <div className="slider-image">Ministère {currentSlide + 1}</div>
            <div className="slider-dots">
              {[...Array(2)].map((_, i) => (
                <span key={i} className={`dot ${i === currentSlide ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>
          <button className="slider-btn next" onClick={() => setCurrentSlide(Math.min(8, currentSlide + 1))}>›</button>
        </div>
      </div>

      <p className="ministries-footer">
        Explorez les différents ministères de notre église et trouvez votre place dans notre communauté.
      </p>

      <div className="ministries-logos">
        {ministriesLogos.map((ministry, index) => (
          <div key={index} className="ministry-logo-card">
            <div className="logo-container">
              <img 
                src={ministry.image} 
                alt={ministry.name}
                className="ministry-logo-image"
              />
            </div>
            <h3 className="ministry-logo-name">{ministry.name}</h3>
            <button 
              className="btn-secondary"
              onClick={() => handleLearnMore(ministry.link)}
            >
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

/*
//Composant Témoignages
const Testimonials = () => {
  const testimonials = [
    {
      text: "Je n'ai pas compris l'épreuve sur le moment, mais aujourd'hui, je vois qu'elle m'a rapproché de Dieu plus que n'importe quelle bénédiction."
    },
    {
      text: "C'est au moment où j'avais tout perdu que j'ai compris que la foi, c'est s'accrocher à Dieu quand il ne reste plus rien d'autre."
    },
    {
      text: "Ce n'est pas le temps qui m'a guéri, c'est la vérité de Dieu sur moi qui a remplacé les mensonges que je croyais."
    },
    {
      text: "Ce n'est pas le temps qui m'a guéri, c'est la vérité de Dieu sur moi qui a remplacé les mensonges que je croyais."
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Ce que disent les autres</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
*/
// Composant FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "Quels sont les heures de services?",
      answer: "Nous avons deux services. L'un chaque Dimanche 8:00 AM - 9:30 AM et chaque mercredi 4:30 PM - 6:00 PM"
    },
    {
      question: "Comment devenir membre de L'église Calvary Chapel Port-au-Prince?",
      answer: "Pour devenir membre de Calvary Chapel Port-au-Prince, il faut participer à nos deux classes, Philosophie du ministère et Fondation de la FOi."
    },
    {
      question: "Comment intégrer notre communauté WhatsApp?",
      answer: "Pour intégrer notre communauté WhatsApp, vous devez enregistrer ce numéro: (+509) 4769 - 7777. Après quoi, vous allez envoyez le mot \"Bible\".",
    },
    {
      question: "Quelle est votre politique de baptême?",
      answer: "Nous avons baptême d'eau chaque troisième (3ème) samedi du mois. Vous devrez d'abord vous inscrire à l'administration au numéro suivant: (+509) 2228 6083. Une serviette et un habit de rechange est obligatoire."
    }
  ];

  return (
    <section className="faq-section">
      <h2 className="section-title">Des questions?</h2>
      <p className="section-subtitle">Retrouvez les questions souvent posées ici.</p>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '˅' : '˃'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
// Composant Leaders
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

// Page d'accueil
const HomePage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FaithStatement />
      <Ministries />
      <FAQ />
      <Leaders />
      <Footer />
    </>
  );
};

// Composant Principal App avec Router
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Ministere" element={<Ministere />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;