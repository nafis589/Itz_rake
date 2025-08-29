"use client";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "framer-motion";
import {Archivo} from "next/font/google"

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

const testimonials = [
  {
    text: "Grâce aux signaux de Rake, j’ai enfin commencé à générer des profits réguliers. Son analyse du marché est toujours pertinente.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Karim B.",
    role: "Trader Débutant",
  },
  {
    text: "Les formations sont claires et structurées. J’ai pu passer de novice à trader autonome en seulement quelques mois.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Sophie L.",
    role: "Étudiante en finance",
  },
  {
    text: "Un accompagnement personnalisé qui m’a permis d’éviter de grosses erreurs. Son coaching 1-to-1 est une vraie valeur ajoutée.",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "Jean M.",
    role: "Investisseur Particulier",
  },
  {
    text: "Les analyses quotidiennes m’aident à prendre des décisions rapides et efficaces. Un vrai gain de temps !",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Nadia T.",
    role: "Entrepreneure",
  },
  {
    text: "La gestion de portefeuille est irréprochable. Transparence, sécurité et performance sont toujours au rendez-vous.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Marc D.",
    role: "Chef d’entreprise",
  },
  {
    text: "Les stratégies personnalisées m’ont permis d’atteindre mes objectifs financiers beaucoup plus rapidement que prévu.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Claire P.",
    role: "Investisseuse",
  },
  {
    text: "Rake vulgarise des concepts complexes avec simplicité. C’est un pédagogue incroyable.",
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
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center">
            <div className={`${archivo.className} border py-1 px-4 rounded-lg text-sm tracking-wider`}>
              Témoignages
            </div>
          </div>

          <h2 className={`${archivo.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center`}>
            Ce que disent nos clients
          </h2>
          <p className={`${archivo.className} text-center mt-5 opacity-75`}>
            Découvrez l’impact de nos formations, signaux et coachings sur la réussite de nos traders.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
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
  );
};

export default Testimonial;
