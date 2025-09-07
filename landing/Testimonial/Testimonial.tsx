"use client";
import React from "react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import {Archivo} from "next/font/google"

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

const testimonials = [
  {
    text: "Grâce aux signaux de Rake, j'ai enfin commencé à générer des profits réguliers. Son analyse du marché est toujours pertinente.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Karim B.",
    role: "Trader Débutant",
  },
  {
    text: "Les formations sont claires et structurées. J'ai pu passer de novice à trader autonome en seulement quelques mois.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Sophie L.",
    role: "Étudiante en finance",
  },
  {
    text: "Un accompagnement personnalisé qui m'a permis d'éviter de grosses erreurs. Son coaching 1-to-1 est une vraie valeur ajoutée.",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "Jean M.",
    role: "Investisseur Particulier",
  },
  {
    text: "Les analyses quotidiennes m'aident à prendre des décisions rapides et efficaces. Un vrai gain de temps !",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Nadia T.",
    role: "Entrepreneure",
  },
  {
    text: "La gestion de portefeuille est irréprochable. Transparence, sécurité et performance sont toujours au rendez-vous.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Marc D.",
    role: "Chef d'entreprise",
  },
  {
    text: "Les stratégies personnalisées m'ont permis d'atteindre mes objectifs financiers beaucoup plus rapidement que prévu.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Claire P.",
    role: "Investisseuse",
  },
  {
    text: "Rake vulgarise des concepts complexes avec simplicité. C'est un pédagogue incroyable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Ali K.",
    role: "Trader Amateur",
  },
  {
    text: "Je recommande son programme à tous ceux qui veulent sérieusement se lancer dans le trading.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Fatima Z.",
    role: "Étudiante en économie",
  },
  {
    text: "Depuis que je suis ses conseils, mes résultats en bourse se sont nettement améliorés.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Julien R.",
    role: "Particulier",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonial = () => {

  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #3b82f6 100%)",
        }}
      />
      
      <section id="testimonials" className="relative z-10 py-14 sm:py-16 overflow-hidden px-4">
        
        <div className="container relative z-10 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto">
          <div className="flex justify-center">
            <div className={`${archivo.className} badge-brand py-1 px-3 sm:px-4`}>
              Témoignages
            </div>
          </div>

          <h2 className={`${archivo.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-4 sm:mt-5 text-center text-brand-primary`}>
            Ce que disent nos clients
          </h2>
          <p className={`${archivo.className} text-center mt-3 sm:mt-5 text-brand-muted text-sm sm:text-base leading-relaxed`}>
            Découvrez l&apos;impact de nos formations, signaux et coachings sur la réussite de nos traders.
          </p>
        </div>

        {/* Columns */}
        <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] sm:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden sm:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Testimonial;