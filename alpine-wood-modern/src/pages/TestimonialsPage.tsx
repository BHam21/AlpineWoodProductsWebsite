import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PageHeader } from '@/components/sections/PageHeader';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
  project?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John & Sarah Thompson',
    location: 'Denver, CO',
    quote: 'Alpine Wood Products transformed our kitchen into a masterpiece. Their attention to detail and craftsmanship is unmatched. We couldn\'t be happier with the results!',
    rating: 5,
    project: 'Custom Kitchen',
    image: 'https://ext.same-assets.com/3804481554/1982761139.jpeg'
  },
  {
    id: '2',
    name: 'Robert Wilson',
    location: 'CEO, Wilson Financial Group',
    quote: 'Our office renovation was completed on time and exceeded all expectations. The custom boardroom table and office furnishings have impressed every client who walks through our door.',
    rating: 5,
    project: 'Commercial Office',
    image: 'https://ext.same-assets.com/3804481554/473714098.jpeg'
  },
  {
    id: '3',
    name: 'Elizabeth Martin',
    location: 'Architect, Martin Design Associates',
    quote: 'As an architect, I have worked with many millwork companies, but Alpine consistently delivers the highest quality. Their ability to bring our designs to life with precision makes them our go-to partner.',
    rating: 5,
    project: 'Commercial Projects',
    image: 'https://ext.same-assets.com/3804481554/2280419113.jpeg'
  },
  {
    id: '4',
    name: 'Michael Johnson',
    location: 'Springfield, MO',
    quote: 'The custom doors they created for our home are absolutely stunning. The level of detail in the woodwork is simply amazing. Every visitor to our home comments on them.',
    rating: 5,
    project: 'Custom Entry Doors',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg'
  },
  {
    id: '5',
    name: 'Jennifer & David Williams',
    location: 'Joplin, MO',
    quote: 'We hired Alpine to create built-in bookshelves and a home office. The quality of their work exceeded our expectations. The team was professional and the installation was flawless.',
    rating: 5,
    project: 'Home Office',
    image: 'https://ext.same-assets.com/3804481554/3225838293.jpeg'
  },
  {
    id: '6',
    name: 'Thomas Clark',
    location: 'CEO, Clark Financial Services',
    quote: 'Our bank lobby renovation required custom woodwork that projected quality and professionalism. Alpine delivered exactly what we needed, on time and on budget.',
    rating: 5,
    project: 'Commercial Banking Center',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg'
  },
];

const TestimonialImagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const imagesWithTestimonials = testimonials.filter(t => t.image);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-rotate carousel (pause when hovering)
  useEffect(() => {
    if (isHovering || imagesWithTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === imagesWithTestimonials.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesWithTestimonials.length, isHovering]);

  const handlePrev = () => {
    setCurrentIndex((current) =>
      current === 0 ? imagesWithTestimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) =>
      current === imagesWithTestimonials.length - 1 ? 0 : current + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative max-w-6xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={carouselRef} className="relative h-[400px] md:h-[500px] rounded-lg shadow-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              <img
                src={imagesWithTestimonials[currentIndex].image}
                alt={imagesWithTestimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/90 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-amber-500 w-4 h-4 md:w-5 md:h-5 mr-1"
                    />
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-lg md:text-xl mb-2 font-medium truncate italic">
                    "{imagesWithTestimonials[currentIndex].quote}"
                  </p>
                  <p className="text-alpine-cream font-bold text-lg md:text-xl">
                    {imagesWithTestimonials[currentIndex].name}
                  </p>
                  <p className="text-alpine-taupe text-sm">
                    {imagesWithTestimonials[currentIndex].location}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-alpine-accent text-white flex items-center justify-center transition-colors z-10"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-alpine-accent text-white flex items-center justify-center transition-colors z-10"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {imagesWithTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? 'bg-alpine-cream w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Client Testimonials"
        subtitle="Hear what our clients have to say about their experience working with Alpine Wood Products. Our commitment to quality and customer satisfaction is reflected in these testimonials."
      />

      {/* Testimonial Images Carousel */}
      <section className="py-12 bg-gradient-to-b from-alpine-brown/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h2
              className="text-3xl font-bold text-alpine-accent mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Happy Clients
            </motion.h2>
            <motion.p
              className="text-alpine-brown/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Browse through our showcase of completed projects and see what our clients are saying about their experience with Alpine Wood Products.
            </motion.p>
          </div>
          <TestimonialImagesCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-alpine-cream-light/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.4 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-alpine-taupe/10"
              >
                <div className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating
                            ? 'text-amber-500'
                            : 'text-gray-300'
                        } w-5 h-5`}
                      />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <FaQuoteLeft className="text-alpine-cream-dark/30 absolute -top-2 -left-1 w-10 h-10" />
                    <p className="text-alpine-brown/80 italic relative z-10 pl-6">"{testimonial.quote}"</p>
                  </div>

                  <div className="flex items-center">
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
                      <p className="font-bold text-alpine-accent">{testimonial.name}</p>
                      <p className="text-alpine-brown/60 text-sm">{testimonial.location}</p>
                      {testimonial.project && (
                        <span className="inline-block mt-1 text-xs bg-alpine-cream text-alpine-accent px-2 py-1 rounded">
                          {testimonial.project}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alpine-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-alpine-brown mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-alpine-brown/70 mb-8">
              Join our satisfied customers and experience the Alpine Wood Products difference.
              Contact us today to discuss your custom woodworking needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-alpine-accent to-alpine-accent-dark text-alpine-cream py-3 px-8 rounded-md font-medium shadow-[0_6px_0_0_rgba(67,49,33,0.6),0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_0_rgba(67,49,33,0.6),0_0_20px_rgba(0,0,0,0.15)] active:shadow-[0_4px_0_0_rgba(67,49,33,0.6),0_0_10px_rgba(0,0,0,0.1)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border border-alpine-taupe/20 group"
                >
                  <span>Contact Us</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 bg-white text-alpine-accent py-3 px-8 rounded-md font-medium shadow-[0_6px_0_0_rgba(153,151,138,0.3),0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_0_0_rgba(153,151,138,0.3),0_0_20px_rgba(0,0,0,0.1)] active:shadow-[0_4px_0_0_rgba(153,151,138,0.3),0_0_10px_rgba(0,0,0,0.05)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border-2 border-alpine-accent group"
                >
                  <span>View Our Gallery</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
