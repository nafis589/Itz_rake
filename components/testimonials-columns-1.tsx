// Testimonial-columns-1.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TestimonialType = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialType[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border-2 border-slate-100 shadow-lg max-w-xs w-full bg-white hover:border-blue-100 transition-all duration-300"
                key={i}
                style={{boxShadow: 'var(--shadow-brand)'}}
              >
                <div className="text-brand-secondary leading-relaxed">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                    unoptimized
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-brand-primary">
                      {name}
                    </div>
                    <div className="leading-5 text-brand-muted tracking-tight">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
