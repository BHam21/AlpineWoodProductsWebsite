import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBuilding, FaStore, FaHospital, FaHotel, FaSchool, FaUniversity } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';

// Commercial project types
const commercialTypes = [
  {
    id: 'office',
    title: 'Corporate Offices',
    description: 'Reception desks, executive suites, conference rooms, and workstations for professional environments.',
    icon: <FaBuilding className="text-alpine-tan" size={36} />,
    image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
  },
  {
    id: 'retail',
    title: 'Retail & Hospitality',
    description: 'Custom displays, counters, and built-ins for retail stores, restaurants, and hospitality spaces.',
    icon: <FaStore className="text-alpine-tan" size={36} />,
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Facilities',
    description: 'Durable, easy-to-clean millwork for medical offices, dental practices, and healthcare facilities.',
    icon: <FaHospital className="text-alpine-tan" size={36} />,
    image: 'https://ext.same-assets.com/3804481554/473714098.jpeg',
  },
  {
    id: 'hospitality',
    title: 'Hotels & Resorts',
    description: 'Luxurious furnishings for lobbies, guest rooms, restaurants, and public spaces in hotels and resorts.',
    icon: <FaHotel className="text-alpine-tan" size={36} />,
    image: 'https://ext.same-assets.com/3804481554/3034254256.jpeg',
  },
  {
    id: 'education',
    title: 'Educational Institutions',
    description: 'Functional and durable cabinetry and millwork for classrooms, libraries, and administrative spaces.',
    icon: <FaSchool className="text-alpine-tan" size={36} />,
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
  {
    id: 'institutional',
    title: 'Institutional Buildings',
    description: 'Custom millwork for government buildings, museums, and other institutional spaces.',
    icon: <FaUniversity className="text-alpine-tan" size={36} />,
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
];

// Commercial projects gallery
const projectGallery = [
  {
    id: 'proj1',
    title: 'Executive Boardroom',
    description: 'Custom conference table and wall paneling for a financial services firm',
    image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
    category: 'Corporate',
  },
  {
    id: 'proj2',
    title: 'Boutique Retail Display',
    description: 'Custom display cabinets and checkout counter for a luxury retail store',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
    category: 'Retail',
  },
  {
    id: 'proj3',
    title: 'Hotel Lobby Reception',
    description: 'Reception desk and decorative wall panels for a boutique hotel',
    image: 'https://ext.same-assets.com/3804481554/3034254256.jpeg',
    category: 'Hospitality',
  },
  {
    id: 'proj4',
    title: 'Medical Office Suite',
    description: 'Custom cabinetry and workstations for a medical office',
    image: 'https://ext.same-assets.com/3804481554/473714098.jpeg',
    category: 'Healthcare',
  },
];

// Commercial benefits
const benefits = [
  {
    title: 'Design Flexibility',
    description: 'Custom solutions designed specifically for your space and business needs.',
  },
  {
    title: 'Commercial-Grade Materials',
    description: 'Durable materials that can withstand high-traffic commercial environments.',
  },
  {
    title: 'Code Compliance',
    description: 'All millwork meets commercial building codes and ADA requirements when applicable.',
  },
  {
    title: 'Professional Project Management',
    description: 'Dedicated project managers to ensure on-time, on-budget completion.',
  },
  {
    title: 'Minimal Disruption',
    description: 'Installation scheduled to minimize impact on your business operations.',
  },
  {
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage on all commercial millwork.',
  },
];

export function CommercialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-alpine-brown-dark pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://ext.same-assets.com/3804481554/1177313443.jpeg"
            alt="Commercial Interior Background"
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
                Commercial Interiors
              </h1>
              <p className="text-xl text-alpine-tan-light mb-8 max-w-2xl">
                Elevate your business space with custom millwork and cabinetry designed to enhance functionality and impress your clients.
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
                  View Commercial Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Commercial Applications</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                We design and manufacture custom millwork for a wide range of commercial environments, each with unique requirements and specifications.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-alpine-tan-light/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent/0 flex items-end">
                    <div className="p-4">
                      <h3 className="text-white text-xl font-bold">{type.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-alpine-brown-dark">{type.title}</h3>
                  </div>
                  <p className="text-alpine-gray-dark mb-4">{type.description}</p>
                  <Link
                    to={`/products/commercial-interiors`}
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

      {/* Project Gallery Section */}
      <section className="py-20 bg-alpine-tan-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Featured Commercial Projects</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Explore our portfolio of commercial projects showcasing our craftsmanship across various industries and applications.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectGallery.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md h-80"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/90 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <span className="text-alpine-tan text-sm uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-alpine-tan-light mb-4">{project.description}</p>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center text-white bg-alpine-brown/60 hover:bg-alpine-brown/80 py-2 px-4 rounded-md text-sm transition-colors"
                    >
                      View Project <FaArrowRight className="ml-2" size={12} />
                    </Link>
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
              View All Commercial Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">The Alpine Advantage</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Our commercial millwork services offer numerous advantages for businesses looking to create distinctive, functional spaces.
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
                className="bg-alpine-tan-light/20 p-6 rounded-lg border-l-4 border-alpine-brown"
              >
                <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">{benefit.title}</h3>
                <p className="text-alpine-gray-dark">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-alpine-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Process</h2>
              <p className="text-lg text-alpine-tan-light max-w-3xl mx-auto">
                We follow a streamlined process designed specifically for commercial projects, ensuring clear communication and timely execution.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-alpine-brown text-center p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Consultation & Discovery</h3>
              <p className="text-alpine-tan-light">We meet with your team to understand project requirements, specifications, timeline, and budget constraints.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-alpine-brown text-center p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Design & Proposal</h3>
              <p className="text-alpine-tan-light">Our team develops detailed designs, specifications, and a comprehensive proposal for your project.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-alpine-brown text-center p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-alpine-tan text-alpine-brown-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Execution & Installation</h3>
              <p className="text-alpine-tan-light">We manufacture your millwork to exact specifications and coordinate professional installation at your location.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Commercial Space?"
        description="Contact our commercial division today to discuss your project needs and schedule a consultation."
        buttonText="Contact Our Commercial Team"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/2877275378.jpeg"
      />
    </>
  );
}
