"use client";
import React from "react";
import { Tiles } from "@/components/ui/tiles";
import { Archivo, Playwrite_MX } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { Youtube, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });
const playwrite = Playwrite_MX({ weight: ["400"] });

const HeroSection: React.FC = () => {
  const [play, setPlay] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      {/* Tiles Background */}
      <div className="absolute inset-0 w-full h-full">
        <Tiles 
          rows={80}
          cols={15}
          tileSize="md"
          className="opacity-30"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <span
              className={`${playwrite.className} text-xl sm:text-2xl font-bold text-brand-primary`}
            >
              Itz_rake!
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm text-brand-muted">
            <a href="#services" className="link-brand transition-colors duration-200 hover:text-brand-primary">
              Services
            </a>
            <a href="#testimonials" className="link-brand transition-colors duration-200 hover:text-brand-primary">
              Témoignages
            </a>
            <a href="#about" className="link-brand transition-colors duration-200 hover:text-brand-primary">
              À propos
            </a>
            <a href="#formation" className="link-brand transition-colors duration-200 hover:text-brand-primary">
              Formation
            </a>
            <a href="#contact" className="link-brand transition-colors duration-200 hover:text-brand-primary">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">
            <span className="hidden sm:inline">Rejoindre la formation</span>
            <span className="sm:hidden">Formation</span>
          </button>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brand-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-b border-gray-200 shadow-lg"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Témoignages
              </a>
              <a 
                href="#about" 
                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#formation" 
                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Formation
              </a>
              <a 
                href="#contact" 
                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center gap-8 sm:gap-12 text-center">
          {/* Texte */}
          <div className="text-center">
            <h1
              className={`${archivo.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto font-bold text-brand-primary leading-tight mb-4 sm:mb-6 tracking-tight`}
            >
              <span className="block sm:inline">Analysez avec Précision,</span>{" "}
              <div className="relative inline-block mb-2 sm:mb-0">
                
                <span className="relative z-10 px-1 sm:px-2 py-1 sm:py-2">Investissez</span>
                <Image
                  src="/illustration.svg"
                  alt="cercle décoratif"
                  width={500}
                  height={100}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[120%] h-auto"
                />
              </div>
              
              <span className="block sm:inline">avec Confiance,</span>{" "}

              <span className="block sm:inline">Réussissez avec Discipline.</span>
            </h1>

            <p
              className={`${archivo.className} text-brand-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2`}
            >
              Découvrez les stratégies, outils et conseils d&apos;un trader
              professionnel pour tirer parti des marchés financiers (Forex,
              Crypto, Actions). Transparence, discipline et performance au cœur
              de chaque décision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button className="btn-primary transform hover:scale-105 w-full sm:w-auto">
                <span className="hidden sm:inline">Commencer dès aujourd&apos;hui</span>
                <span className="sm:hidden">Commencer maintenant</span>
              </button>
              <button className="btn-secondary transform hover:scale-105 w-full sm:w-auto">
                Voir mes résultats
              </button>
            </div>
          </div>

          {/* Vidéo */}
          <div className="relative w-full max-w-3xl mx-auto px-4">
            {/* Décorations - cachées sur mobile */}
            <div className="hidden lg:block absolute -right-35 top-12 -translate-y-1/2 flex-col items-center pointer-events-none">
              <span className="mb-2 ml-8 text-lg font-semibold text-brand-secondary">
                Regardez ceci!
              </span>
              <Image
                src="/boucle.svg"
                alt="fleche"
                width={120}
                height={120}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Conteneur vidéo */}
            <div className="relative bg-brand-primary rounded-xl sm:rounded-2xl overflow-hidden w-full" style={{boxShadow: 'var(--shadow-brand-lg)'}}>
              {!play ? (
                // Image de couverture avec bouton play
                <motion.div className="relative w-full aspect-video">
                  <Image
                    src="/cover.png"
                    alt="Video Cover"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setPlay(true)}
                    className="absolute inset-0 flex items-center justify-center bg-trasparent bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 group"
                  >
                    <div className="bg-white rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300">
                      <Youtube size={32} className="sm:w-12 sm:h-12" color="gray" />
                    </div>
                  </button>
                </motion.div>
              ) : (
                // Iframe YouTube quand on clique sur Play
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9pmN3Ks3zrg?autoplay=1"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default HeroSection;
