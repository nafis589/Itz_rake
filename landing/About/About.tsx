"use client";
import React from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import TraderNotification from "@/components/ui/TraderNotification";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center">
      {/* Container centrée avec border-radius */}
      <div className="bg-gray-100 text-black rounded-3xl p-12 max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 py-1 px-4 rounded-lg font-medium mb-6">
            À propos
          </div>
          <h1
            className={`${archivo.className} text-4xl font-bold text-black mb-4`}
          >
            Un Trader Expérimenté et Transparent
          </h1>
          <p
            className={`${archivo.className} text-black text-lg max-w-2xl mx-auto`}
          >
            Avec plus de 10 ans d’expérience sur les marchés financiers, Rake
            Evrard aide les investisseurs à développer leur capital grâce à une
            approche rigoureuse, disciplinée et orientée résultats.
          </p>
        </div>

        {/* Features Layout */}
        <div className="space-y-8">
          {/* 1. Première carte seule */}
          <div className="bg-white rounded-2xl px-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texte à gauche */}
            <div>
              <h3
                className={`${archivo.className} text-xl font-semibold text-gray-900 mb-3`}
              >
                Spécialiste en Analyse Technique et Fondamentale
              </h3>
              <p className={`${archivo.className} text-gray-600`}>
                Une expertise approfondie dans l’étude des tendances, graphiques
                et indicateurs financiers pour anticiper les mouvements du
                marché avec précision.
              </p>
            </div>

            {/* Espace réservé pour l'image à droite */}
            <div className="flex justify-center items-center">
              {/* Tu mettras ton image ici */}
              <Image
                src="/phone.svg"
                alt="phone"
                width={300}
                height={300}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* 2. Deux cartes côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carte 1 */}
            <div className="bg-white rounded-2xl px-8 pt-8 flex flex-col justify-between">
              <div>
                <h3
                  className={`${archivo.className} text-xl font-semibold text-gray-900 mb-3`}
                >
                  Gestion des Risques
                </h3>
                <p className={`${archivo.className} text-gray-600`}>
                  Application de stratégies de money management strictes pour
                  protéger le capital et optimiser la rentabilité à long terme.
                </p>
              </div>
              <Image
                src="/umbrella.svg"
                width={300}
                height={300}
                alt="Illustration"
                className="self-end mt-4"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Carte 2 */}
            <div className="relative bg-white rounded-2xl px-8 pt-8 flex flex-col justify-between overflow-hidden">
              <div>
                <h3
                  className={`${archivo.className} text-xl font-semibold text-gray-900 mb-3`}
                >
                  Reconnu Internationalement
                </h3>
                <p className={`${archivo.className} text-gray-600`}>
                  Intervenant régulier sur plusieurs plateformes de trading et
                  suivi par une communauté d’investisseurs dans plus de 20 pays.
                </p>
              </div>

              <Image
                src="/earth.svg"
                width={350}
                height={350}
                alt="Illustration"
                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* 3. Dernière carte seule */}
          <div className="bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Texte à gauche */}
            <div className="max-w-md">
              <h3
                className={`${archivo.className} text-xl font-semibold text-gray-900 mb-3`}
              >
                Formation et Accompagnement
              </h3>
              <p className={`${archivo.className} text-gray-600`}>
                Propose des formations personnalisées pour aider les débutants
                et professionnels à maîtriser les bases du trading et développer
                leur autonomie financière.
              </p>
            </div>

            {/* Notifications à droite */}
            <div className="relative h-72">
              {/* 1ère notif en haut à droite */}
              <div className="absolute top-0 right-4">
                <TraderNotification
                  userName="Alex"
                  message="Waouh 🤩 Rake est vraiment un excellent trader !"
                  timeAgo="2h ago"
                  avatarUrl="https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan"
                />
              </div>

              {/* 2ème notif en dessous et un peu à gauche */}
              <div className="absolute top-24 right-59">
                <TraderNotification
                  userName="Marie"
                  message="Merci pour tout  🙌"
                  timeAgo="3h ago"
                  avatarUrl="https://api.dicebear.com/9.x/adventurer/svg?seed=George"
                />
              </div>

              {/* 3ème notif à côté */}
              <div className="absolute top-24 right-0">
                <TraderNotification
                  userName="Lucas"
                  message="Analyse très précise 👌"
                  timeAgo="5h ago"
                  avatarUrl="https://api.dicebear.com/9.x/adventurer/svg?seed=Wyatt"
                />
              </div>

              {/* 4ème notif un peu plus bas */}
              <div className="absolute bottom-8 right-10">
                <TraderNotification
                  userName="Nina"
                  message="Super accompagnement 💯"
                  timeAgo="6h ago"
                  avatarUrl="https://api.dicebear.com/9.x/croodles/svg?seed=Liliana"
                />
              </div>

              {/* 5ème notif en bas à gauche */}
              <div className="absolute bottom-8 -left-30">
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
