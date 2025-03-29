import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  image?: string;
  rating: number;
}

interface HorizontalTestimonialsProps {
  testimonials: Testimonial[];
}

export function HorizontalTestimonials({ testimonials }: HorizontalTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [expandedQuotes, setExpandedQuotes] = useState<Record<string, boolean>>({});

  // Determine how many cards to show based on the window width
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };

    // Set on initial load
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto rotate carousel
  useEffect(() => {
    if (isHovering) return;

    const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);

    const interval = setInterval(() => {
      setCurrentIndex(current =>
        current === totalSlides - 1 ? 0 : current + 1
      );
    }, 6000); // Increased time to allow reading

    return () => clearInterval(interval);
  }, [testimonials.length, visibleTestimonials, isHovering]);

  const handlePrev = () => {
    const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);
    setCurrentIndex(current =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const handleNext = () => {
    const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);
    setCurrentIndex(current =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  // Toggle expanded state for a quote
  const toggleQuoteExpansion = (id: string) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculate displayed testimonials
  const startIndex = currentIndex * visibleTestimonials;
  const displayedTestimonials = testimonials.slice(startIndex, startIndex + visibleTestimonials);

  // Fill with testimonials from the beginning if we don't have enough to display
  if (displayedTestimonials.length < visibleTestimonials) {
    const neededCount = visibleTestimonials - displayedTestimonials.length;
    const additionalTestimonials = testimonials.slice(0, neededCount);
    displayedTestimonials.push(...additionalTestimonials);
  }

  // Function to check if a quote needs to be truncated
  const needsTruncation = (quote: string) => {
    return quote.length > 150;
  };

  // Function to get truncated text or full text based on expanded state
  const getDisplayText = (testimonial: Testimonial) => {
    if (expandedQuotes[testimonial.id] || !needsTruncation(testimonial.quote)) {
      return testimonial.quote;
    }
    return `${testimonial.quote.substring(0, 150)}...`;
  };

  return (
    <section className="py-20 bg-alpine-cream-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="h-0.5 w-10 bg-alpine-accent opacity-50"
                  whileInView={{
                    width: ["0px", "40px"],
                    opacity: [0, 0.5]
                  }}
                  transition={{ duration: 1 }}
                ></motion.div>
                <h3 className="mx-4 text-alpine-accent font-medium px-4">CLIENT TESTIMONIALS</h3>
                <motion.div
                  className="h-0.5 w-10 bg-alpine-accent opacity-50"
                  whileInView={{
                    width: ["0px", "40px"],
                    opacity: [0, 0.5]
                  }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown mb-4">What Our Clients Say</h2>
              <p className="text-lg text-alpine-brown/70 max-w-2xl mx-auto">
                Our craftsmanship and dedication to quality have earned us the trust of clients across the country.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonial cards carousel */}
        <div
          className="relative px-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Previous button */}
            <motion.button
              onClick={handlePrev}
              className="absolute left-0 z-20 -ml-5 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-alpine-taupe/20 flex items-center justify-center text-alpine-accent hover:bg-alpine-accent hover:text-white transition-colors"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(87, 66, 44, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowLeft />
            </motion.button>

            {/* Testimonial cards */}
            <div className="flex flex-nowrap gap-6 justify-center items-stretch w-full overflow-hidden">
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-1 min-w-0 md:min-w-[300px] max-w-[400px] bg-white rounded-xl shadow-lg p-6 md:p-8 relative z-10 border border-alpine-taupe/20 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? 'text-amber-500'
                            : 'text-gray-300'
                        } w-4 h-4 mr-1`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6 flex-grow">
                    <FaQuoteLeft className="text-alpine-cream-dark absolute -top-2 -left-1 w-6 h-6 opacity-30" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${testimonial.id}-${expandedQuotes[testimonial.id] ? 'expanded' : 'collapsed'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-alpine-brown/80 text-sm md:text-base italic relative z-10 pl-6">
                          "{getDisplayText(testimonial)}"
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {needsTruncation(testimonial.quote) && (
                      <button
                        onClick={() => toggleQuoteExpansion(testimonial.id)}
                        className="mt-2 text-alpine-accent text-sm font-medium flex items-center hover:underline"
                      >
                        {expandedQuotes[testimonial.id] ? 'Read Less' : 'Read More'}
                        <motion.div
                          animate={{ rotate: expandedQuotes[testimonial.id] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-1"
                        >
                          <FaChevronDown size={12} />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Client info */}
                  <div className="flex items-center mt-4 pt-4 border-t border-alpine-taupe/10">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-alpine-cream"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-alpine-cream flex items-center justify-center mr-4 text-alpine-accent font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-alpine-accent">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-alpine-brown/60 text-sm">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              onClick={handleNext}
              className="absolute right-0 z-20 -mr-5 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-alpine-taupe/20 flex items-center justify-center text-alpine-accent hover:bg-alpine-accent hover:text-white transition-colors"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(87, 66, 44, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-alpine-accent'
                    : 'bg-alpine-taupe/40 hover:bg-alpine-taupe/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* View All Testimonials button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-alpine-accent to-alpine-accent-dark text-alpine-cream py-3 px-8 rounded-md text-lg font-medium shadow-[0_4px_0_0_rgba(67,49,33,0.6),0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(67,49,33,0.6),0_0_15px_rgba(0,0,0,0.15)] active:shadow-[0_2px_0_0_rgba(67,49,33,0.6),0_0_5px_rgba(0,0,0,0.1)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border border-alpine-taupe/20 group"
            >
              <span>View All Testimonials</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
