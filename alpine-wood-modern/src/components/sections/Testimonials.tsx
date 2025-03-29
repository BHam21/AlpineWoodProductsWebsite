import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  image?: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate testimonials (pause when hovering)
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length, isHovering]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -5 : 5
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? -5 : 5
    })
  };

  return (
    <section className="py-20 md:py-24 bg-[#f6a47f]/10 relative overflow-hidden">
      {/* Enhanced background pattern with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22%3E%3Cpath d=%22M0 4c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4z%22 fill=%22%23f6a47f%22 fill-opacity=%22.1%22/%3E%3C/svg%3E')]"
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.3, 0.4, 0.3],
          backgroundPosition: ['0% 0%', '1% 1%', '0% 0%']
        }}
        transition={{
          opacity: { duration: 5, repeat: Infinity, repeatType: "reverse" },
          backgroundPosition: { duration: 10, repeat: Infinity, repeatType: "reverse" }
        }}
      ></motion.div>

      {/* Enhanced decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-[#8a442c] opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#8a442c] opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="h-0.5 w-10 bg-[#8a442c] opacity-50"
                  whileInView={{
                    width: ["0px", "40px"],
                    opacity: [0, 0.5]
                  }}
                  transition={{ duration: 1 }}
                ></motion.div>
                <h3 className="mx-4 text-[#8a442c] font-medium px-4">TESTIMONIALS</h3>
                <motion.div
                  className="h-0.5 w-10 bg-[#8a442c] opacity-50"
                  whileInView={{
                    width: ["0px", "40px"],
                    opacity: [0, 0.5]
                  }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#30160c] mb-4">What Our Clients Say</h2>
              <p className="text-lg text-[#30160c]/70 max-w-2xl mx-auto">
                Our craftsmanship and dedication to quality have earned us the trust of clients across the country.
              </p>
            </div>
          </motion.div>
        </div>

        <div
          className="max-w-6xl mx-auto relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Fixed height container with proper overflow handling */}
          <div className="relative md:min-h-[500px] py-8">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  x: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-white rounded-xl p-6 md:p-10 shadow-xl absolute w-full transform perspective-1000"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.05)"
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image column with responsive layout */}
                {testimonials[activeIndex].image && (
                  <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
                    <div className="relative">
                      {/* Enhanced decorative elements */}
                      <motion.div
                        className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#8a442c] opacity-30 rounded-tl-lg"
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                          width: ["5rem", "6rem", "5rem"],
                          height: ["5rem", "6rem", "5rem"]
                        }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.div>

                      <motion.div
                        className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#8a442c] opacity-30 rounded-br-lg"
                        animate={{
                          opacity: [0.3, 0.5, 0.3],
                          width: ["5rem", "6rem", "5rem"],
                          height: ["5rem", "6rem", "5rem"]
                        }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                      ></motion.div>

                      <motion.img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-md relative z-10"
                        initial={{ scale: 0.95, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        style={{
                          filter: "brightness(1.05) contrast(1.05)",
                          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)"
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Content column with improved spacing and text wrapping */}
                <div className={`md:col-span-${testimonials[activeIndex].image ? '8' : '12'} lg:col-span-${testimonials[activeIndex].image ? '9' : '12'} flex flex-col`}>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotate: [-10, 0]
                        }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.1,
                          type: "spring"
                        }}
                      >
                        <FaStar
                          className={`${
                            i < testimonials[activeIndex].rating
                              ? 'text-amber-500'
                              : 'text-gray-300'
                          } w-5 h-5 mx-0.5`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote text with improved readability and max height with scrolling */}
                  <div className="mb-6 relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: -20 }}
                      animate={{ opacity: 0.2, scale: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaQuoteLeft className="text-[#f6a47f] absolute -top-4 -left-2 w-8 h-8 opacity-20" />
                    </motion.div>
                    <motion.div
                      className="max-h-[200px] md:max-h-[250px] lg:max-h-[300px] overflow-y-auto pr-2
                      scrollbar-thin scrollbar-thumb-[#c68b7c]/40 scrollbar-track-[#f6a47f]/10
                      scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#8a442c]/40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <p className="text-[#30160c]/80 text-lg md:text-xl italic relative z-10 leading-relaxed pl-6">
                        "{testimonials[activeIndex].quote}"
                      </p>
                    </motion.div>
                  </div>

                  {/* Client info with improved spacing */}
                  <div className="mt-auto pt-4">
                    <motion.p
                      className="font-bold text-[#8a442c] text-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {testimonials[activeIndex].name}
                    </motion.p>
                    {testimonials[activeIndex].role && (
                      <motion.p
                        className="text-[#30160c]/70"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {testimonials[activeIndex].role}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls with better spacing and positioning */}
          <div className="flex justify-between items-center mt-16">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#8a442c] hover:text-white border border-[#c68b7c]/30 text-[#30160c] flex items-center justify-center transition-colors"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(138, 68, 44, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white hover:bg-[#8a442c] hover:text-white border border-[#c68b7c]/30 text-[#30160c] flex items-center justify-center transition-colors"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(138, 68, 44, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </motion.button>
            </div>

            {/* Enhanced navigation dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? 'bg-[#8a442c] scale-125'
                      : 'bg-[#c68b7c]/40 opacity-30 hover:opacity-60'
                  }`}
                  whileHover={{
                    scale: 1.5,
                    opacity: 0.8
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={index === activeIndex ? {
                    scale: [1, 1.2, 1],
                    boxShadow: ["0 0 0px rgba(138, 68, 44, 0.4)", "0 0 10px rgba(138, 68, 44, 0.6)", "0 0 0px rgba(138, 68, 44, 0.4)"]
                  } : {}}
                  transition={index === activeIndex ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  } : {}}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
