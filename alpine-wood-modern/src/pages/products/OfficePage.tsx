import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';

// Office furniture categories
const furnitureCategories = [
  {
    id: 'desks',
    title: 'Executive Desks',
    description: 'Prestigious desk designs that make a statement in any executive office.',
    image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
  },
  {
    id: 'conference',
    title: 'Conference Tables',
    description: 'Custom tables designed for productive meetings and impressive presentations.',
    image: 'https://ext.same-assets.com/3804481554/473714098.jpeg',
  },
  {
    id: 'reception',
    title: 'Reception Stations',
    description: 'Welcoming reception desks that make a positive first impression.',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    description: 'Custom cabinets, credenzas, and shelving for organized, efficient spaces.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
  {
    id: 'workstations',
    title: 'Custom Workstations',
    description: 'Ergonomic, functional workstations for productive, comfortable work environments.',
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
  {
    id: 'specialty',
    title: 'Specialty Pieces',
    description: 'Unique furnishings designed for specific purposes and spaces.',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
];

// Office environments
const officeEnvironments = [
  {
    title: 'Corporate Headquarters',
    description: 'Prestigious, high-quality furnishings that reflect your company\'s success and values.',
    bulletPoints: [
      'Executive office suites',
      'Board and conference rooms',
      'Reception and lobby areas',
      'Coordinated design throughout',
    ],
    image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
  },
  {
    title: 'Professional Practices',
    description: 'Sophisticated, functional furnishings for law firms, medical offices, and other professional settings.',
    bulletPoints: [
      'Client-facing consultation spaces',
      'Private offices and workstations',
      'Storage for files and equipment',
      'Custom reception solutions',
    ],
    image: 'https://ext.same-assets.com/3804481554/473714098.jpeg',
  },
  {
    title: 'Home Offices',
    description: 'Beautifully crafted workspace solutions that integrate seamlessly with your home.',
    bulletPoints: [
      'Custom fitted furniture',
      'Integrated technology solutions',
      'Ergonomic design considerations',
      'Style matching your home décor',
    ],
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
];

// Materials and finishes
const materialsAndFinishes = [
  {
    title: 'Premium Hardwoods',
    examples: ['Cherry', 'Walnut', 'Maple', 'Oak', 'Mahogany'],
    description: 'The finest hardwoods, selected for beauty and durability.',
  },
  {
    title: 'Veneer Options',
    examples: ['Figured Wood Veneers', 'Exotic Wood Options', 'Reconstituted Veneers', 'Quartered Cuts'],
    description: 'Premium veneers for consistent appearance and cost-effective solutions.',
  },
  {
    title: 'Finishes',
    examples: ['Traditional Stains', 'Custom Color Matching', 'Clear Coats', 'Glazes and Distressing'],
    description: 'Expert finishing techniques that enhance the natural beauty of the wood.',
  },
  {
    title: 'Complementary Materials',
    examples: ['Glass', 'Metal Accents', 'Stone Inlays', 'Leather Insets'],
    description: 'Additional materials to enhance function and aesthetics.',
  },
];

// Benefits of custom office furniture
const benefits = [
  {
    icon: '📐',
    title: 'Custom Sizing',
    description: 'Perfect fit for your specific space requirements.',
  },
  {
    icon: '🧠',
    title: 'Ergonomic Design',
    description: 'Built for comfort, productivity, and well-being.',
  },
  {
    icon: '🎨',
    title: 'Brand Integration',
    description: 'Reflects your company identity and culture.',
  },
  {
    icon: '💯',
    title: 'Superior Quality',
    description: 'Exceptional craftsmanship that stands the test of time.',
  },
  {
    icon: '💻',
    title: 'Technology Integration',
    description: 'Seamless incorporation of modern technology needs.',
  },
  {
    icon: '🤝',
    title: 'Professional Impression',
    description: 'Creates a lasting impression on clients and partners.',
  },
];

export function OfficePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-alpine-brown-dark pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://ext.same-assets.com/3804481554/1177313443.jpeg"
            alt="Custom Office Furniture Background"
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
                Custom Office Furniture
              </h1>
              <p className="text-xl text-alpine-tan-light mb-8 max-w-2xl">
                Elevate your workspace with bespoke office furnishings that combine exceptional craftsmanship, functionality, and style.
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
                  View Office Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Furniture Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Office Furniture Solutions</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                From executive desks to complete office suites, we create custom office furniture that combines functionality, durability, and distinctive style.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-alpine-tan-light/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent/0 flex items-end">
                    <div className="p-4">
                      <h3 className="text-white text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">{category.title}</h3>
                  <p className="text-alpine-gray-dark mb-4">{category.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-alpine-brown hover:text-alpine-brown-dark transition-colors text-sm font-medium"
                  >
                    Learn more <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-alpine-tan-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">The Benefits of Custom Office Furniture</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Discover why custom office furniture is the perfect choice for creating productive, impressive work environments.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">{benefit.title}</h3>
                <p className="text-alpine-gray-dark">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Environments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Solutions for Every Environment</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                We create custom office furnishings for a variety of environments, each tailored to the specific needs and aesthetic of the space.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {officeEnvironments.map((environment, index) => (
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
                      src={environment.image}
                      alt={environment.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-alpine-brown-dark mb-4">{environment.title}</h3>
                  <p className="text-alpine-gray-dark mb-6">{environment.description}</p>
                  <ul className="space-y-3 mb-8">
                    {environment.bulletPoints.map((point, idx) => (
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
                    Discuss Your Project <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials and Finishes Section */}
      <section className="py-20 bg-alpine-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Materials & Finishes</h2>
              <p className="text-lg text-alpine-tan-light max-w-3xl mx-auto">
                We use only the finest materials and finishes to create office furniture that's both beautiful and durable.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materialsAndFinishes.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-alpine-brown/50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{material.title}</h3>
                <p className="text-alpine-tan-light mb-4">{material.description}</p>
                <div className="flex flex-wrap gap-2">
                  {material.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="bg-alpine-brown py-1 px-3 rounded-full text-sm text-alpine-tan"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Our Design Process</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                We follow a collaborative, step-by-step approach to create office furnishings that perfectly meet your needs.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process steps */}
            <div className="absolute top-0 left-1/2 bottom-0 w-px bg-alpine-brown/20 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative md:text-right"
                >
                  <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-alpine-brown z-10"></div>
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-2">1. Initial Consultation</h3>
                  <p className="text-alpine-gray-dark">We meet to discuss your office needs, preferences, and specific requirements.</p>
                </motion.div>
                <div></div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  <div className="hidden md:block absolute top-0 left-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-alpine-brown z-10"></div>
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-2">2. Space Planning & Design</h3>
                  <p className="text-alpine-gray-dark">Our designers create detailed plans and renderings for your review and approval.</p>
                </motion.div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative md:text-right"
                >
                  <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-alpine-brown z-10"></div>
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-2">3. Material Selection</h3>
                  <p className="text-alpine-gray-dark">Choose from our extensive selection of premium materials, finishes, and hardware.</p>
                </motion.div>
                <div></div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <div className="hidden md:block absolute top-0 left-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-alpine-brown z-10"></div>
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-2">4. Custom Fabrication</h3>
                  <p className="text-alpine-gray-dark">Our skilled craftsmen build your custom office furnishings with precision and care.</p>
                </motion.div>
              </div>

              {/* Step 5 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative md:text-right"
                >
                  <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-alpine-brown z-10"></div>
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-2">5. Professional Installation</h3>
                  <p className="text-alpine-gray-dark">Our experienced team handles delivery and installation with care and precision.</p>
                </motion.div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Create Your Ideal Workspace"
        description="Elevate your office environment with custom furniture that reflects your business identity and enhances productivity."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/1177313443.jpeg"
      />
    </>
  );
}
