import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import '../Css/Ministere.css';
import UEspoirImage from '../assets/UEspoir.png';
import LaParoleQuiChangeImage from '../assets/LaParolequiChange.png';
import CcpsImage from '../assets/CCPS.png';
import LapawolicImage from '../assets/Lapawoli.jpeg';

// Section de la page Ministère
const MinistereHero = () => {
  return (
    <section className="ministere-hero">
      <div className="ministere-hero-overlay"></div>
      <div className="ministere-hero-content">
        <h1 className="ministere-hero-title">Intégrez nos ministères</h1>
        <div className="ministere-hero-underline"></div>
        <h2 className="ministere-hero-subtitle">3 Étapes Simples</h2>
        
        <div className="ministere-hero-verse">
          <p className="ministere-verse-text">
            "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes, 
            sachant que vous recevrez du Seigneur l'héritage pour récompense. Servez Christ, le Seigneur."
          </p>
          <p className="ministere-verse-ref">Col. 3:23-24</p>
        </div>

        <p className="ministere-hero-description">
          L'intégration des ministères au sein d'une communauté ecclésiale est vitale pour le développement du ministère, 
          l'engagement actif et la croissance spirituelle. En répondant à des besoins et des intérêts divers, les ministères 
          permettent aux membres de servir, de se connecter et de grandir dans leur cheminement de foi. En outre, les ministères 
          spécialisés permettent une action de proximité efficace, en répondant aux besoins spécifiques des gens et en faisant 
          une différence positive dans la communauté.
        </p>
      </div>
    </section>
  );
};

// Section des 3 étapes d'intégration
const EtapesIntegration = () => {
  const etapes = [
    {
      title: "Membre",
      description: "Rejoignez notre communauté et devenez membre de la famille de l'église"
    },
    {
      title: "Fondation De Foi",
      description: "Suivez l'un de nos cours, Fondement de la foi ou Philosophie du ministère."
    },
    {
      title: "Formulaire",
      description: "Après avoir suivi les cours, n'hésitez pas à remplir le formulaire relatif au ministère de votre choix."
    }
  ];

  return (
    <section className="etapes-integration">
      <h2 className="section-title">Étapes d'intégration</h2>
      <div className="etapes-grid">
        {etapes.map((etape, index) => (
          <div key={index} className="etape-card">
            <h3 className="etape-title">{etape.title}</h3>
            <p className="etape-description">{etape.description}</p>
          </div>
        ))}
      </div>
      
      <div className="ready-section">
        <h2 className="ready-title">Êtes-vous prêt à en faire parti?</h2>
        <button className="btn-accueil">
          Voir la table d'accueil près de la port d'entrée de l'église avant ou après le service du dimanche matin
        </button>
      </div>
    </section>
  );
};

// Section Université Espoir
const UniversiteEspoir = () => {
  return (
    <section className="universite-section">
      <div className="universite-image-container">
        <img 
          src={UEspoirImage} 
          alt="Université Espoir" 
          className="universite-image"
        />
        <div className="universite-button-overlay">
          <a 
            href="https://uespoir.edu.ht/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-visit-universite"
          >
            Visiter le site web
          </a>
        </div>
      </div>
    </section>
  );
};

// Section La Parole Qui Change 
const ParoleQuiChange = () => {
  return (
    <section className="parole-section">
      <div className="parole-image-container">
        <img 
          src={LaParoleQuiChangeImage} 
          alt="La Parole Qui Change" 
          className="parole-image"
        />
        <div className="parole-overlay"></div>
        
        <div className="parole-content-overlay">
          <h2 className="parole-overlay-title">La parole qui change</h2>
          
          <p className="parole-overlay-description">
            Chaque jour, 7h:00 AM, écoutez l'étude de la Bible livre par livre, chapitre par chapitre, 
            verset par verset sur l'antenne de la radio lumière, sur la fréquence 97.7 FM, avec pasteur Seige POTEAU.
          </p>
          
          <p className="parole-overlay-replay">
            Vous pouvez aussi les re-écouter, quand vous le souhaiter sur le site web la parole qui change
          </p>
          
          <div className="parole-button-overlay">
            <a 
              href="https://laparolequichange.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-visit-parole"
            >
              Visiter le site web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Section Calvary Christian Professional School (CCPS)
const CcpsMinistere = () => {
  return (
    <section className="universite-section">
      <div className="universite-image-container">
        <img 
          src={CcpsImage} 
          alt="Calvary Christian Professional School" 
          className="universite-image"
        />
        <div className="ccps-content-overlay">
          <h2 className="ccps-overlay-title">Calvary Christian Professional School</h2>
          <p className="ccps-overlay-description">
            C'est un ministère de Calvary Chapel visant à offrir à la communauté une école professionnelle 
            où ils peuvent apprendre en toute tranquillité.
          </p>
        </div>
      </div>
    </section>
  );
};

// ✅ Section Lapawoli
const LapawolicMinistere = () => {
  return (
    <section className="parole-section">
      <div className="parole-image-container">
        <img 
          src={LapawolicImage} 
          alt="Lapawoli Ministère" 
          className="parole-image"
        />
        <div className="parole-overlay"></div>
        
        <div className="parole-content-overlay">
          <h2 className="parole-overlay-title">Lapawoli</h2>
          
          <p className="parole-overlay-description">
            C'est une émission évangélique présentée par Pasteur Fenel JOCELIN, pasteur titulaire de 
            l'église Calvary Chapel Port-au-Prince, tous les lundis à 7h PM sur les réseaux sociaux.
          </p>
          
          <p className="parole-overlay-replay">
            Vous pouvez aussi re-écouter les émissions quand vous le souhaitez sur le site web Lapawoli.
          </p>
          
          <div className="parole-button-overlay">
            <a 
              href="https://www.lapawoli.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-visit-parole"
            >
              Visiter le site web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant principal de la page Ministère
const Ministere = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ministere-page">
      <Navigation />
      <MinistereHero />
      <EtapesIntegration />
      <UniversiteEspoir />
      <ParoleQuiChange />
      <CcpsMinistere />
      <LapawolicMinistere />
      <Footer />
    </div>
  );
};

export default Ministere;