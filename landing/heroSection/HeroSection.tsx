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
              className={`${playwrite.className} text-2xl font-bold text-gray-800}`}
            >
              Itz_rake!
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">
              What We Do
            </a>
            <a href="#" className="hover:text-gray-800">
              Testimonials
            </a>
            <a href="#" className="hover:text-gray-800">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-800">
              How it Works
            </a>
            <a href="#" className="hover:text-gray-800">
              FAQ
            </a>
          </nav>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          Join the Waitlist
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Texte */}
          <div className="text-center">
            <h1
              className={`${archivo.className} text-5xl lg:text-5xl md:w-[800px] font-bold text-gray-800 leading-tight mb-6`}
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
              className={`${archivo.className} text-gray-600 text-lg mb-8 max-w-2xl mx-auto`}
            >
              Découvrez les stratégies, outils et conseils d’un trader
              professionnel pour tirer parti des marchés financiers (Forex,
              Crypto, Actions). Transparence, discipline et performance au cœur
              de chaque décision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Commencer dès aujourd’hui
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors">
                Voir mes résultats
              </button>
            </div>
          </div>

          {/* Vidéo */}
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Décorations */}
            <div className="absolute -right-35 top-12 -translate-y-1/2 flex flex-col items-center pointer-events-none">
              <span className="mb-2 ml-8 text-lg font-semibold text-gray-700">
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
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl mx-auto">
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
                    className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-20 hover:bg-opacity-50 transition"
                  >
                    <Youtube size={48} color="red" />
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
