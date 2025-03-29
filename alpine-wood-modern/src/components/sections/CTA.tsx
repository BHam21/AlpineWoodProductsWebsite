import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export function CTA({ title, description, buttonText, buttonLink, image }: CTAProps) {
  return (
    <section className="py-20 bg-alpine-brown-dark relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-alpine-brown-dark/80 via-alpine-brown-dark/60 to-alpine-brown-dark/80"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-alpine-cream mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              stiffness: 300
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-lg font-medium bg-white text-alpine-accent shadow-[0_6px_0_0_rgba(198,139,124,0.5),0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_0_0_rgba(198,139,124,0.5),0_0_20px_rgba(0,0,0,0.25)] active:shadow-[0_4px_0_0_rgba(198,139,124,0.5),0_0_10px_rgba(0,0,0,0.15)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border-2 border-alpine-taupe/20 bg-gradient-to-b from-white to-[#f8f8f8] group"
            >
              <span>{buttonText}</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-alpine-cream opacity-30"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          width: ["8rem", "8.5rem", "8rem"],
          height: ["8rem", "8.5rem", "8rem"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-alpine-cream opacity-30"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          width: ["8rem", "8.5rem", "8rem"],
          height: ["8rem", "8.5rem", "8rem"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
      ></motion.div>
    </section>
  );
}
