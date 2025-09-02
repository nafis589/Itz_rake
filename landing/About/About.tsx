"use client";
import React from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import TraderNotification from "@/components/ui/TraderNotification";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen py-8 sm:py-12 px-4 flex items-center justify-center">
      {/* Container centrée avec border-radius */}
      <div className="bg-brand-light text-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`${archivo.className} badge-brand mb-4 sm:mb-6`}>
            À propos
          </div>
          <h1
            className={`${archivo.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4`}
          >
            Un Trader Expérimenté et Transparent
          </h1>
          <p
            className={`${archivo.className} text-black text-base sm:text-lg max-w-2xl mx-auto leading-relaxed`}
          >
            Avec plus de 10 ans d&apos;expérience sur les marchés financiers, Rake
            Evrard aide les investisseurs à développer leur capital grâce à une
            approche rigoureuse, disciplinée et orientée résultats.
          </p>
        </div>

        {/* Features Layout */}
        <div className="space-y-6 sm:space-y-8">
          {/* 1. Première carte seule - Bleu Foncé */}
          <div className="card-primary-medium px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Texte à gauche */}
            <div className="order-2 md:order-1">
              <h3
                className={`${archivo.className} text-lg sm:text-xl font-semibold card-text-white mb-3`}
              >
                Spécialiste en Analyse Technique et Fondamentale
              </h3>
              <p className={`${archivo.className} card-text-white-muted leading-relaxed text-sm sm:text-base`}>
                Une expertise approfondie dans l&apos;étude des tendances, graphiques
                et indicateurs financiers pour anticiper les mouvements du
                marché avec précision.
              </p>
            </div>

            {/* Espace réservé pour l'image à droite */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <Image
                src="/phone.svg"
                alt="phone"
                width={250}
                height={250}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px]"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* 2. Deux cartes côte à côte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Carte 2 - Bleu Moyen */}
            <div className="card-primary-subtle px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
              <div>
                <h3
                  className={`${archivo.className} text-lg sm:text-xl font-semibold card-text-dark mb-3`}
                >
                  Gestion des Risques
                </h3>
                <p className={`${archivo.className} card-text-dark leading-relaxed text-sm sm:text-base`}>
                  Application de stratégies de money management strictes pour
                  protéger le capital et optimiser la rentabilité à long terme.
                </p>
              </div>
              <Image
                src="/umbrella.svg"
                width={250}
                height={250}
                alt="Illustration"
                className="self-end mt-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px]"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Carte 3 - Bleu Clair */}
            <div className="relative card-primary-light px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex flex-col justify-between overflow-hidden min-h-[280px] sm:min-h-[320px]">
              <div>
                <h3
                  className={`${archivo.className} text-lg sm:text-xl font-semibold card-text-white mb-3`}
                >
                  Reconnu Internationalement
                </h3>
                <p className={`${archivo.className} card-text-white-muted leading-relaxed text-sm sm:text-base`}>
                  Intervenant régulier sur plusieurs plateformes de trading et
                  suivi par une communauté d&apos;investisseurs dans plus de 20 pays.
                </p>
              </div>

              <Image
                src="/earth.svg"
                width={300}
                height={300}
                alt="Illustration"
                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px]"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* 4. Dernière carte seule - Bleu Très Clair */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Texte à gauche */}
            <div className="max-w-md order-2 lg:order-1">
              <h3
                className={`${archivo.className} text-lg sm:text-xl font-semibold card-text-dark mb-3`}
              >
                Formation et Accompagnement
              </h3>
              <p className={`${archivo.className} card-text-dark-muted leading-relaxed text-sm sm:text-base`}>
                Propose des formations personnalisées pour aider les débutants
                et professionnels à maîtriser les bases du trading et développer
                leur autonomie financière.
              </p>
            </div>

            {/* Notifications à droite */}
            <div className="relative h-64 sm:h-72 order-1 lg:order-2">
              {/* 1ère notif en haut à droite */}
              <div className="absolute top-0 right-2 sm:right-4">
                <TraderNotification
                  userName="Alex"
                  message="Waouh 🤩 Rake est vraiment un excellent trader !"
                  timeAgo="2h ago"
                  avatarUrl="https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan"
                />
              </div>

              {/* 2ème notif en dessous et un peu à gauche - masquée sur mobile */}
              <div className="hidden sm:block absolute top-20 sm:top-24 right-32 sm:right-59">
                <TraderNotification
                  userName="Marie"
                  message="Merci pour tout  🙌"
                  timeAgo="3h ago"
                  avatarUrl="https://api.dicebear.com/9.x/adventurer/svg?seed=George"
                />
              </div>

              {/* 3ème notif à côté */}
              <div className="absolute top-16 sm:top-24 right-0">
                <TraderNotification
                  userName="Lucas"
                  message="Analyse très précise 👌"
                  timeAgo="5h ago"
                  avatarUrl="https://api.dicebear.com/9.x/adventurer/svg?seed=Wyatt"
                />
              </div>

              {/* 4ème notif un peu plus bas */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10">
                <TraderNotification
                  userName="Nina"
                  message="Super accompagnement 💯"
                  timeAgo="6h ago"
                  avatarUrl="https://api.dicebear.com/9.x/croodles/svg?seed=Liliana"
                />
              </div>

              {/* 5ème notif en bas à gauche - masquée sur mobile */}
              <div className="hidden sm:block absolute bottom-6 sm:bottom-8 -left-20 sm:-left-30">
                <TraderNotification
                  userName="Karim"
                  message="Toujours dispo pour ses élèves 🔥"
                  timeAgo="8h ago"
                  avatarUrl="https://api.dicebear.com/9.x/big-smile/svg?seed=Katherine"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;