import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface HeroProps {
  title?: string; // Make title optional
  subtitle?: string; // Make subtitle optional
  detailedDescription?: string; // Add new field for detailed description
  image: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function Hero({ title, subtitle, detailedDescription, image, primaryCta, secondaryCta }: HeroProps) {
  return (
    <div className="relative h-[85vh] overflow-hidden">
      {/* Background Image with enhanced Parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: 1.1, filter: 'brightness(0.8)' }}
        animate={{
          scale: 1,
          filter: 'brightness(1)',
          backgroundPosition: ['center 0%', 'center 5%']
        }}
        transition={{
          scale: { duration: 1.5 },
          filter: { duration: 2 },
          backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }
        }}
      >
        {/* Enhanced Overlay gradient with texture for better readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-alpine-brown/95 via-alpine-brown/85 to-alpine-brown/70"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundBlendMode: 'overlay',
            opacity: 0.9
          }}
        ></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6">
              <div className="h-1 w-20 bg-alpine-cream mb-6 rounded-full"></div>

              {/* Featured Quote - Now the main focal point - MADE LARGER WITH SHADOW */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-5"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-alpine-cream leading-tight mb-6 text-shadow-lg">
                  If you can dream it,<br />
                  We can do it
                </h1>
              </motion.div>

              {/* Detailed Description - NOW WHITE WITHOUT BOX */}
              {detailedDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-8"
                >
                  <p className="text-xl md:text-2xl text-white leading-relaxed text-shadow-md">
                    {detailedDescription}
                  </p>
                </motion.div>
              )}

              {/* Original subtitle hidden behind the detailed description - UPDATED TO MATCH */}
              {!detailedDescription && subtitle && (
                <p className="text-xl md:text-2xl mb-4 text-white text-shadow-md">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Primary CTA Button - 3D Style */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-alpine-accent to-alpine-accent-dark text-alpine-cream py-3 px-8 rounded-md font-medium shadow-[0_6px_0_0_rgba(67,49,33,0.6),0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_0_rgba(67,49,33,0.6),0_0_20px_rgba(0,0,0,0.15)] active:shadow-[0_4px_0_0_rgba(67,49,33,0.6),0_0_10px_rgba(0,0,0,0.1)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border border-alpine-taupe/20 group text-lg"
                >
                  <span>{primaryCta.text}</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Secondary CTA Button - Matched to Primary Button */}
              {secondaryCta && (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to={secondaryCta.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-b from-alpine-accent to-alpine-accent-dark text-alpine-cream py-3 px-8 rounded-md font-medium shadow-[0_6px_0_0_rgba(67,49,33,0.6),0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_0_rgba(67,49,33,0.6),0_0_20px_rgba(0,0,0,0.15)] active:shadow-[0_4px_0_0_rgba(67,49,33,0.6),0_0_10px_rgba(0,0,0,0.1)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border border-alpine-taupe/20 group text-lg"
                  >
                    <span>{secondaryCta.text}</span>
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative bottom curve */}
      <div className="absolute bottom-0 w-full">
        <svg
          className="w-full text-alpine-cream"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
          style={{
            filter: "drop-shadow(0px -1px 3px rgba(0,0,0,0.1))"
          }}
        >
          <path d="M0,0 C720,100 1440,0 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </div>
  );
}
