import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { HorizontalTestimonials } from '@/components/sections/HorizontalTestimonials';
import { CTA } from '@/components/sections/CTA';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTools, FaWrench, FaHammer, FaRulerCombined } from 'react-icons/fa';
import { ImageCarousel } from '@/components/sections/ImageCarousel';

// Import gallery and showroom images for the carousel
const carouselImages = [
  {
    src: 'https://ext.same-assets.com/3804481554/2371924672.jpeg',
    alt: 'New Closet',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1827392156.jpeg',
    alt: 'Columbus Project Kitchen',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/731519731.jpeg',
    alt: 'Hall House Ceiling',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1931562737.jpeg',
    alt: 'Marlin Downtown Commercial',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3566318864.jpeg',
    alt: 'Denver Project Home Bar',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1403591738.jpeg',
    alt: 'Springfield Kitchen',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/45986874.jpeg',
    alt: 'Magnolia Kitchen',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1628572177.jpeg',
    alt: 'Joplin Kitchen',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/559838431.jpeg',
    alt: 'Deer Run Doors',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3925815466.jpeg',
    alt: 'First Oak Bank Commercial',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3054421493.jpeg',
    alt: 'Chimney Rock Fireplace',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1864951841.jpeg',
    alt: 'Showroom main view',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/541040550.jpeg',
    alt: 'Showroom display',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1788972551.jpeg',
    alt: 'Showroom interior',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3692985823.jpeg',
    alt: 'Showroom woodwork',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1533474908.jpeg',
    alt: 'Showroom cabinetry',
  },
];

const featuredProducts = [
  {
    id: '1',
    title: 'Custom Kitchens',
    description: 'Elegant, functional kitchens designed to be the heart of your home, with premium craftsmanship in every detail.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
    link: '/products/kitchens',
  },
  {
    id: '2',
    title: 'Architectural Doors',
    description: 'Stunning entry ways and doors that make a statement, crafted with old-world techniques and modern precision.',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
    link: '/products/doors',
  },
  {
    id: '3',
    title: 'Commercial Interiors',
    description: 'Beautiful and functional commercial spaces that elevate your business and impress your clients and customers.',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
    link: '/products/commercial',
  },
];

const testimonials = [
  {
    id: '1',
    name: 'John & Sarah Thompson',
    role: 'Denver, CO',
    quote: 'Alpine Wood Products transformed our kitchen into a masterpiece. Their attention to detail and craftsmanship is unmatched. We couldn\'t be happier with the results!',
    rating: 5,
    image: 'https://ext.same-assets.com/3804481554/1982761139.jpeg',
  },
  {
    id: '2',
    name: 'Robert Wilson',
    role: 'CEO, Wilson Financial Group',
    quote: 'Our office renovation was completed on time and exceeded all expectations. The custom boardroom table and office furnishings have impressed every client who walks through our door.',
    rating: 5,
    image: 'https://ext.same-assets.com/3804481554/473714098.jpeg',
  },
  {
    id: '3',
    name: 'Elizabeth Martin',
    role: 'Architect, Martin Design Associates',
    quote: 'As an architect, I have worked with many millwork companies, but Alpine consistently delivers the highest quality. Their ability to bring our designs to life with precision makes them our go-to partner.',
    rating: 5,
    image: 'https://ext.same-assets.com/3804481554/2280419113.jpeg',
  },
  {
    id: '4',
    name: 'Michael Johnson',
    role: 'Springfield, MO',
    quote: 'The custom doors they created for our home are absolutely stunning. The level of detail in the woodwork is simply amazing. Every visitor to our home comments on them.',
    rating: 5,
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
  {
    id: '5',
    name: 'Jennifer & David Williams',
    role: 'Joplin, MO',
    quote: 'We hired Alpine to create built-in bookshelves and a home office. The quality of their work exceeded our expectations. The team was professional and the installation was flawless.',
    rating: 5,
    image: 'https://ext.same-assets.com/3804481554/3225838293.jpeg',
  },
  {
    id: '6',
    name: 'Thomas Clark',
    role: 'CEO, Clark Financial Services',
    quote: 'Our bank lobby renovation required custom woodwork that projected quality and professionalism. Alpine delivered exactly what we needed, on time and on budget.',
    rating: 5,
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
];

const processSteps = [
  {
    icon: <FaRulerCombined className="text-alpine-cream" size={32} />,
    title: 'Design & Consult',
    description: 'Our team works with you to understand your vision, preferences, and requirements to create a custom design plan.'
  },
  {
    icon: <FaTools className="text-alpine-cream" size={32} />,
    title: 'Precision Manufacturing',
    description: 'Using state-of-the-art equipment and traditional craftsmanship, we bring your design to life with meticulous attention to detail.'
  },
  {
    icon: <FaWrench className="text-alpine-cream" size={32} />,
    title: 'Expert Installation',
    description: 'Our skilled installation team ensures your custom woodwork is perfectly placed and finished in your space.'
  },
  {
    icon: <FaHammer className="text-alpine-cream" size={32} />,
    title: 'Quality Assurance',
    description: 'We stand behind our work with comprehensive quality checks and dedicated post-installation support.'
  }
];

export function HomePage() {
  return (
    <>
      <Hero
        title="Fine Cabinetry and Millwork for Distinctive Spaces"
        detailedDescription="With over 35 years of experience, we specialize in custom cabinetry, entry doors, and architectural millwork built to elevate both residential and commercial spaces. Every project is crafted with precision, premium materials, and a passion for timeless design. We help bring your vision to life."
        image="https://ext.same-assets.com/3804481554/621626395.jpeg"
        primaryCta={{ text: "View Our Work", href: "/gallery" }}
        secondaryCta={{ text: "Visit Our Showroom", href: "/showroom" }}
      />

      {/* Add image carousel before stats section */}
      <section className="bg-alpine-tan-light">
        <div className="container mx-auto">
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Stats section - UPDATED with larger, bolder stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center bg-alpine-brown-light/10 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-alpine-brown mb-3">35+</h3>
              <p className="text-alpine-brown-dark font-semibold text-lg md:text-xl">Years of Excellence</p>
            </motion.div>

            <motion.div
              className="text-center bg-alpine-brown-light/10 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-alpine-brown mb-3">500+</h3>
              <p className="text-alpine-brown-dark font-semibold text-lg md:text-xl">Projects Completed</p>
            </motion.div>

            <motion.div
              className="text-center bg-alpine-brown-light/10 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-alpine-brown mb-3">20+</h3>
              <p className="text-alpine-brown-dark font-semibold text-lg md:text-xl">Skilled Artisans</p>
            </motion.div>

            <motion.div
              className="text-center bg-alpine-brown-light/10 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-alpine-brown mb-3">100%</h3>
              <p className="text-alpine-brown-dark font-semibold text-lg md:text-xl">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedProducts
        title="Craftsmanship in Every Detail"
        subtitle="Explore our premium custom wood products, designed and manufactured under one roof in Marionville, Missouri."
        products={featuredProducts}
      />

      {/* Our Process Section */}
      <section className="py-20 bg-alpine-cream-light relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown mb-4">Our Craftsman Process</h2>
              <p className="text-lg text-alpine-brown/70 max-w-3xl mx-auto">
                From initial concept to final installation, we follow a meticulous process to ensure exceptional quality in every project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {/* Connecting line for desktop - made more visible */}
            <div className="absolute top-16 left-0 w-full h-1 bg-alpine-taupe/40 hidden lg:block"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number indicator - improved visibility */}
                <div className="absolute -top-10 w-10 h-10 rounded-full bg-alpine-accent shadow-lg text-alpine-cream flex items-center justify-center text-base font-bold border-4 border-alpine-cream lg:flex">
                  {index + 1}
                </div>

                {/* Icon circle - enhanced with shadow and border */}
                <div className="w-24 h-24 rounded-full bg-alpine-brown flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-alpine-cream transform hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-alpine-accent mb-3">{step.title}</h3>
                <p className="text-alpine-brown/80">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/manufacturing"
              className="inline-flex items-center text-alpine-brown font-medium text-lg hover:text-alpine-brown-dark transition-colors"
            >
              Learn more about our manufacturing process <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <HorizontalTestimonials testimonials={testimonials} />

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Featured Projects</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Explore some of our recent custom woodworking projects that showcase our craftsmanship and attention to detail.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg shadow-md h-72"
            >
              <img
                src="https://ext.same-assets.com/3804481554/384484466.jpeg"
                alt="Luxury Kitchen"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-1">Luxury Kitchen</h3>
                  <p className="text-alpine-tan-light mb-3">Custom cabinetry and island design</p>
                  <Link
                    to="/gallery"
                    className="text-alpine-cream bg-alpine-accent/90 hover:bg-alpine-accent inline-flex items-center py-2 px-4 rounded-md text-sm transition-colors shadow-md"
                  >
                    View Project <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-md h-72"
            >
              <img
                src="https://ext.same-assets.com/3804481554/1177313443.jpeg"
                alt="Executive Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-1">Executive Office</h3>
                  <p className="text-alpine-tan-light mb-3">Custom millwork and built-in cabinetry</p>
                  <Link
                    to="/gallery"
                    className="text-alpine-cream bg-alpine-accent/90 hover:bg-alpine-accent inline-flex items-center py-2 px-4 rounded-md text-sm transition-colors shadow-md"
                  >
                    View Project <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-md h-72"
            >
              <img
                src="https://ext.same-assets.com/3804481554/1157441046.jpeg"
                alt="Grand Entryway"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-1">Grand Entryway</h3>
                  <p className="text-alpine-tan-light mb-3">Custom doors and architectural details</p>
                  <Link
                    to="/gallery"
                    className="text-alpine-cream bg-alpine-accent/90 hover:bg-alpine-accent inline-flex items-center py-2 px-4 rounded-md text-sm transition-colors shadow-md"
                  >
                    View Project <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-alpine-accent to-alpine-accent-dark text-alpine-cream py-3 px-8 rounded-md text-lg font-medium shadow-[0_6px_0_0_rgba(67,49,33,0.6),0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_0_rgba(67,49,33,0.6),0_0_20px_rgba(0,0,0,0.15)] active:shadow-[0_4px_0_0_rgba(67,49,33,0.6),0_0_10px_rgba(0,0,0,0.1)] transition-all duration-200 transform hover:-translate-y-1 active:translate-y-1 border border-alpine-taupe/20 group"
            >
              <span>View Full Gallery</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Bring Your Vision to Life"
        description="From concept to completion, we're with you every step of the way. Let's create something extraordinary together."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/3034254256.jpeg"
      />
    </>
  );
}
