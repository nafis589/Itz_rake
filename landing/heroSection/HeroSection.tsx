"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Archivo, Playwrite_MX } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { Youtube } from "lucide-react";
import { motion } from "framer-motion";

const archivo = Archivo({ subsets: ["latin"], weight: ["700"] });
const playwrite = Playwrite_MX({ weight: ["400"] });

const HeroSection: React.FC = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-0 h-[100%] skew-y-12"
        )}
      />
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <span
              className={`${playwrite.className} text-2xl font-bold text-brand-primary`}
            >
              Itz_rake!
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm text-brand-muted">
            <a href="#" className="link-brand transition-colors duration-200">
              What We Do
            </a>
            <a href="#" className="link-brand transition-colors duration-200">
              Testimonials
            </a>
            <a href="#" className="link-brand transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="link-brand transition-colors duration-200">
              How it Works
            </a>
            <a href="#" className="link-brand transition-colors duration-200">
              FAQ
            </a>
          </nav>
        </div>

        <button className="btn-success text-sm">
          Join the Waitlist
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Texte */}
          <div className="text-center">
            <h1
              className={`${archivo.className} text-5xl lg:text-6xl md:w-[800px] font-bold text-brand-primary leading-tight mb-6 tracking-tight`}
            >
              <div className="relative inline-block">
                <span className="relative z-10 px-2 py-2">Investissez</span>
                <Image
                  src="/illustration.svg"
                  alt="cercle décoratif"
                  width={500}
                  height={100}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto"
                />
              </div>
              avec Confiance, Analysez avec Précision , Réussissez avec
              Discipline.
            </h1>

            <p
              className={`${archivo.className} text-brand-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed`}
            >
              Découvrez les stratégies, outils et conseils d&apos;un trader
              professionnel pour tirer parti des marchés financiers (Forex,
              Crypto, Actions). Transparence, discipline et performance au cœur
              de chaque décision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary transform hover:scale-105">
                Commencer dès aujourd&apos;hui
              </button>
              <button className="btn-secondary transform hover:scale-105">
                Voir mes résultats
              </button>
            </div>
          </div>

          {/* Vidéo */}
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Décorations */}
            <div className="absolute -right-35 top-12 -translate-y-1/2 flex flex-col items-center pointer-events-none">
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
            <div className="relative bg-brand-primary rounded-2xl overflow-hidden w-full max-w-3xl mx-auto" style={{boxShadow: 'var(--shadow-brand-lg)'}}>
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
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Youtube size={48} color="#EF4444" />
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
  );
};

export default HeroSection;
