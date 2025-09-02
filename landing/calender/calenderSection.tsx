import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Archivo } from "next/font/google"

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] })

const CalenderSection = () => {
  return (
    <section id="contact" className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="badge-brand mb-4 sm:mb-6">
            Planifiez votre réussite
          </div>
          <h2 className={`${archivo.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4 tracking-tight`}>
            Réservez votre session de coaching
          </h2>
          <p className={`${archivo.className} text-brand-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed`}>
            Choisissez la date qui vous convient pour votre formation personnalisée ou session de coaching 1-to-1 avec Rake.
          </p>
        </div>

        {/* Calendar Section */}
        <div className="flex justify-center">
          <div className="p-4 sm:p-6 lg:p-8 max-w-fit">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalenderSection