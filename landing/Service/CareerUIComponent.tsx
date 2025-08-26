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
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto flex h-[600px] rounded-xl overflow-hidden">
        {/* Left side - Text */}
        <div className="w-4/5 bg-white p-12 flex flex-col justify-between">
          {/* Sous-titre */}
          <p
            className={`${archivo.className} text-sm text-gray-500 mb-4 tracking-wider`}
          >
            NOS SERVICES
          </p>

          {/* Titre principal */}
          <h1
            className={`${archivo.className} text-7xl font-bold text-gray-900 mb-12 leading-tight`}
          >
            Découvrez nos
            <br />
            <span className="relative leading-tight inline-block">
              <span className="relative z-10">services</span>
              <span className="absolute left-0 bottom-3 w-full h-4 bg-blue-600"></span>
            </span>
          </h1>

          {/* Lien d’action */}
          <div className="flex items-center justify-center -mb-5">
            <span
              className={`${archivo.className} text-gray-900 mr-4 font-medium`}
            >
              Voir les services
            </span>
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </div>
        </div>

        {/* Right side - Carousel */}
        <div className="w-1/2 bg-gray-100 p-12 relative flex flex-col items-center justify-center">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 320}px)` }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl p-6 min-h-[260px] flex-shrink-0 w-[320px] mx-4"
                >
                  {/* Card counter */}
                  <div className="text-sm text-gray-400 font-mono text-right">
                    {card.count}
                  </div>

                  {/* Card image */}
                  <div className="mb-6">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={190} // équivalent à w-14
                      height={190} // équivalent à h-14
                      className="object-contain"
                    />
                  </div>

                  {/* Card content */}
                  <h2
                    className={`${archivo.className} text-lg font-semibold text-gray-900 mb-3`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`${archivo.className} text-gray-600 text-sm leading-relaxed`}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - now absolute bottom-left */}
          <div className="absolute bottom-6 left-6 flex gap-2">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 disabled:opacity-40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === cards.length - 1}
              className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 disabled:opacity-40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress dots (toujours centré en bas si tu veux) */}
          <div className="flex gap-2 mt-4">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-300"
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
