import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';

// Vanity styles
const vanityStyles = [
  {
    id: 'traditional',
    title: 'Traditional Vanities',
    description: 'Elegant designs with raised panels, decorative details, and classic proportions.',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    id: 'contemporary',
    title: 'Contemporary Vanities',
    description: 'Clean lines, minimal details, and modern materials for a sleek, sophisticated look.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
  {
    id: 'transitional',
    title: 'Transitional Vanities',
    description: 'The perfect blend of traditional and contemporary elements for versatile appeal.',
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    description: 'Completely bespoke vanities tailored to your unique vision and specifications.',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
];

// Vanity features
const features = [
  {
    title: 'Premium Materials',
    description: 'Crafted from the finest hardwoods and water-resistant materials for lasting beauty.',
    icon: '🪵',
  },
  {
    title: 'Custom Sizing',
    description: 'Tailored dimensions to perfectly fit your space and accommodate plumbing requirements.',
    icon: '📏',
  },
  {
    title: 'Innovative Storage',
    description: 'Thoughtfully designed drawers and cabinets to maximize organization and accessibility.',
    icon: '🗄️',
  },
  {
    title: 'Coordinated Designs',
    description: 'Matching mirrors, medicine cabinets, and storage towers for a cohesive look.',
    icon: '🪞',
  },
  {
    title: 'Integrated Countertops',
    description: 'Seamless coordination with your choice of countertop material, from marble to quartz.',
    icon: '🧱',
  },
  {
    title: 'Expert Installation',
    description: 'Professional installation by our skilled team for a perfect fit and finish.',
    icon: '🔨',
  },
];

// Vanity space types
const spaceTypes = [
  {
    title: 'Master Bathrooms',
    description: 'Luxurious vanities designed for your primary suite, with ample storage and premium finishes.',
    bulletPoints: [
      'Double sink configurations',
      'Makeup stations and seating areas',
      'Custom heights for comfort',
      'Premium hardware and fixtures',
    ],
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    title: 'Guest Bathrooms',
    description: 'Beautiful and functional vanities that make a statement in your guest bathroom.',
    bulletPoints: [
      'Space-efficient designs',
      'Elegant yet durable materials',
      'Integrated lighting options',
      'Coordinated accessories',
    ],
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
  {
    title: 'Powder Rooms',
    description: 'Statement pieces designed to make an impression in smaller spaces.',
    bulletPoints: [
      'Compact yet impactful designs',
      'Specialty finishes and details',
      'Unique hardware options',
      'Custom solutions for tight spaces',
    ],
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
];

// Gallery images
const galleryImages = [
  {
    src: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
    alt: 'Luxury Master Bathroom Vanity',
    title: 'Luxury Master Vanity',
    description: 'Custom double vanity with makeup area',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
    alt: 'Modern Guest Bathroom Vanity',
    title: 'Contemporary Guest Vanity',
    description: 'Floating vanity with integrated lighting',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
    alt: 'Powder Room Vanity',
    title: 'Statement Powder Room',
    description: 'Elegant vanity with custom details',
  },
  {
    src: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
    alt: 'Transitional Bathroom Vanity',
    title: 'Transitional Style',
    description: 'Custom storage solutions with classic appeal',
  },
];

export function VanitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-alpine-brown-dark pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://ext.same-assets.com/3804481554/2877275378.jpeg"
            alt="Custom Vanity Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-alpine-brown-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Custom Bathroom Vanities
              </h1>
              <p className="text-xl text-alpine-tan-light mb-8 max-w-2xl">
                Beautiful, functional bathroom vanities crafted with premium materials and exceptional attention to detail, designed to elevate your space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-alpine-tan hover:bg-alpine-tan-dark text-alpine-brown-dark font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
                >
                  Request a Consultation <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-transparent border border-alpine-tan/30 hover:border-alpine-tan/70 text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  View Vanity Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vanity Styles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Vanity Styles</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                From classic to contemporary, we craft custom bathroom vanities in a variety of styles to complement your home's architecture and your personal taste.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vanityStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row bg-alpine-tan-light/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="md:w-1/2">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">{style.title}</h3>
                  <p className="text-alpine-gray-dark mb-4">{style.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-alpine-brown hover:text-alpine-brown-dark transition-colors text-sm font-medium mt-auto"
                  >
                    Request information <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 bg-alpine-tan-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Vanity Features</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Our custom vanities combine exceptional craftsmanship with thoughtful design features to create beautiful, functional bathroom centerpieces.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">{feature.title}</h3>
                <p className="text-alpine-gray-dark">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Vanities for Every Space</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                We create custom vanities tailored to the specific requirements and aesthetic of each bathroom in your home.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {spaceTypes.map((space, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-alpine-brown-dark mb-4">{space.title}</h3>
                  <p className="text-alpine-gray-dark mb-6">{space.description}</p>
                  <ul className="space-y-3 mb-8">
                    {space.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-alpine-brown mt-1 mr-3 flex-shrink-0" />
                        <span className="text-alpine-gray-dark">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-alpine-brown text-white py-2 px-5 rounded-md hover:bg-alpine-brown-dark transition-colors"
                  >
                    Request a Design Consultation <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-alpine-tan-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Featured Vanity Projects</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Browse through some of our recent custom vanity installations to inspire your own bathroom project.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-md h-64"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-alpine-tan-light">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-alpine-brown text-white py-3 px-6 rounded-md hover:bg-alpine-brown-dark transition-colors"
            >
              View Full Vanity Gallery <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-alpine-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vanity Design Process</h2>
              <p className="text-lg text-alpine-tan-light max-w-3xl mx-auto">
                From initial concept to final installation, we ensure a smooth and collaborative process to create your perfect custom vanity.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-alpine-brown/50 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-alpine-tan-light">We discuss your needs, preferences, and the specifics of your bathroom space.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-alpine-brown/50 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-alpine-tan-light">Our designers create detailed plans and renderings of your custom vanity for approval.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-alpine-brown/50 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Craftsmanship</h3>
              <p className="text-alpine-tan-light">Our skilled craftsmen build your vanity with precision and attention to detail.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-alpine-brown/50 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Installation</h3>
              <p className="text-alpine-tan-light">Our professional team installs your vanity with precision for a perfect fit and finish.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Transform Your Bathroom with a Custom Vanity"
        description="Elevate your bathroom with a beautifully crafted custom vanity that combines style, function, and exceptional quality."
        buttonText="Start Your Project"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/2877275378.jpeg"
      />
    </>
  );
}
