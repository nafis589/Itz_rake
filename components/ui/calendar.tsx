"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Archivo } from "next/font/google";


const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"] });

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  // Use deterministic highlight based on day number to avoid hydration issues
  const shouldHighlight = !isHeader && typeof day === 'number' && (day % 7 === 3 || day % 11 === 2);
  const bgClass = shouldHighlight
    ? "bg-brand-primary text-white "
    : "text-brand-muted";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 items-center justify-center ${
        isHeader ? "" : "rounded-lg sm:rounded-xl"
      } ${bgClass}`}
    >
      <span className={`font-medium ${isHeader ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm md:text-base"}`}>
        {day}
      </span>
    </div>
  );
};

export function Calendar() {
  
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const bookingLink = `https://cal.com/aliimam/designali`;

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <BentoCard height="h-auto" linkTo={bookingLink}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 h-full gap-4 sm:gap-6 lg:gap-8">
        {/* Section texte */}
        <div className="flex flex-col justify-center">
          <h2 className={`${archivo.className} mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-brand-primary leading-tight`}>
            Des questions sur le trading ?
          </h2>
          <p className={`${archivo.className} mb-3 sm:mb-4 text-xs sm:text-sm md:text-base text-brand-muted`}>
            N&apos;hésitez pas à me contacter !
          </p>
          <Button className="btn-primary rounded-2xl text-xs sm:text-sm md:text-base py-2 sm:py-3 px-4 sm:px-6 w-fit">
            Réserver maintenant
          </Button>
        </div>

        {/* Section calendrier */}
        <div className="flex justify-center lg:justify-end items-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px]">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-2 sm:p-3 transition-colors duration-100 group-hover:border-blue-400">
              <div
                className="rounded-xl sm:rounded-2xl border-2 border-[#A5AEB81F]/10 p-2 sm:p-3 md:p-4"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                {/* En-tête du calendrier */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <p className="text-xs sm:text-sm md:text-base text-brand-primary font-medium">
                      {currentMonth}, {currentYear}
                    </p>
                    <span className="h-1 w-1 rounded-full bg-brand-muted"></span>
                    <p className="text-[10px] sm:text-xs md:text-sm text-brand-muted">30 min</p>
                  </div>
                </div>

                {/* Grille du calendrier */}
                <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
  hideOverflow?: boolean;
  linkTo?: string;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
  hideOverflow = true,
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={`group relative flex flex-col rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-blue-50/50 transition-all duration-200 ${
        hideOverflow && "overflow-hidden"
      } ${height} row-span-${rowSpan} col-span-${colSpan} ${className}`}
      style={{boxShadow: 'var(--shadow-brand)'}}
    >
      {linkTo && (
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 z-[999] flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-4px] sm:group-hover:translate-y-[-6px] lg:group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-brand-primary"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.25 15.25V6.75H8.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 7L6.75 17.25"
            ></path>
          </svg>
        </div>
      )}
      {showHoverGradient && (
        <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return linkTo.startsWith("/") ? (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    ) : (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
