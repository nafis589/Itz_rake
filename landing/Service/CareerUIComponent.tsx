"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Archivo } from "next/font/google";
import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  count: string;
}

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });
const CareerUIComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards: CardData[] = [
    {
      id: 1,
      count: "01",
      image: "/formation.svg",
      title: "Formation Trading",
      description:
        "Des formations adaptées aux débutants et traders avancés pour maîtriser les bases et progresser.",
    },
    {
      id: 2,
      count: "02",
      image: "/trade.svg",
      title: "Signal Trading & Analyses",
      description:
        "Recevez des signaux fiables et des analyses quotidiennes pour optimiser vos prises de décision.",
    },
    {
      id: 3,
      count: "03",
      image: "analysis.svg",
      title: "Coaching 1-to-1",
      description:
        "Un accompagnement personnalisé avec un expert pour accélérer votre progression.",
    },
    {
      id: 4,
      count: "04",
      image: "/wallet.svg",
      title: "Gestion de Portefeuille",
      description:
        "Une gestion professionnelle et sécurisée de vos investissements (si réglementé).",
    },
    {
      id: 5,
      count: "05",
      image: "/target.svg",
      title: "Stratégies Personnalisées",
      description:
        "Des stratégies de trading conçues selon votre profil et vos objectifs financiers.",
    },
  ];

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id="services" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{background: 'radial-gradient(125% 125% at 50% 90%, #fff 40%, #3b82f6 100%)'}}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:h-[600px] rounded-xl overflow-hidden bg-white">
        {/* Left side - Text */}
        <div className="w-full lg:w-4/5 bg-white p-6 pb-12 sm:p-8 sm:pb-8 lg:p-12 flex flex-col justify-between">
          {/* Sous-titre */}
          <p
            className={`${archivo.className} text-xs sm:text-sm text-blue-500 mb-3 sm:mb-4 tracking-wider`}
          >
            NOS SERVICES
          </p>

          {/* Titre principal */}
          <h1
            className={`${archivo.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-primary mb-6 sm:mb-8 lg:mb-12 leading-tight`}
          >
            <span id="formation" className="block">
              Découvrez nos
            </span>
            
            <span className="relative leading-tight inline-block">
              <span className="relative z-10">services</span>
              <span className="absolute left-0 bottom-1 sm:bottom-2 lg:bottom-3 w-full h-2 sm:h-3 lg:h-4 bg-blue-600"></span>
            </span>
          </h1>

          {/* Lien d'action */}
          <div className="flex items-center justify-center lg:justify-start -mb-5">
            <span
              className={`${archivo.className} text-brand-primary mr-4 font-medium text-sm sm:text-base`}
            >
              Voir les services
            </span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
          </div>
        </div>

        {/* Right side - Carousel */}
        <div className="w-full lg:w-1/2 bg-brand-light p-4 sm:p-6 lg:p-12 relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-auto">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out lg:justify-start justify-center"
            >
              {/* Sur mobile/tablette, afficher seulement la carte active */}
              <div className="block lg:hidden w-full max-w-sm mx-auto">
                <div className="card-brand p-4 sm:p-6 min-h-[240px] sm:min-h-[260px] w-full">
                  {/* Card counter */}
                  <div className="text-sm text-blue-500 font-mono text-right">
                    {cards[currentIndex].count}
                  </div>

                  {/* Card image */}
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <Image
                      src={cards[currentIndex].image}
                      alt={cards[currentIndex].title}
                      width={150}
                      height={150}
                      className="object-contain w-32 h-32 sm:w-40 sm:h-40"
                    />
                  </div>

                  {/* Card content */}
                  <h2
                    className={`${archivo.className} text-base sm:text-lg font-semibold text-brand-primary mb-2 sm:mb-3`}
                  >
                    {cards[currentIndex].title}
                  </h2>
                  <p
                    className={`${archivo.className} text-brand-muted text-sm leading-relaxed`}
                  >
                    {cards[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Sur desktop, afficher le carousel complet */}
              <div 
                className="hidden lg:flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 320}px)` }}
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="card-brand p-6 min-h-[260px] flex-shrink-0 w-[320px] mx-4"
                  >
                    {/* Card counter */}
                    <div className="text-sm text-blue-500 font-mono text-right">
                      {card.count}
                    </div>

                    {/* Card image */}
                    <div className="mb-6">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={190}
                        height={190}
                        className="object-contain"
                      />
                    </div>

                    {/* Card content */}
                    <h2
                      className={`${archivo.className} text-lg font-semibold text-brand-primary mb-3`}
                    >
                      {card.title}
                    </h2>
                    <p
                      className={`${archivo.className} text-brand-muted text-sm leading-relaxed`}
                    >
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 lg:left-6 flex gap-2">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center hover:bg-opacity-90 disabled:opacity-40 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === cards.length - 1}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center hover:bg-opacity-90 disabled:opacity-40 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 mt-4 justify-center">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-900" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerUIComponent;