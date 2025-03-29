import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';
import { PageHeader } from '@/components/sections/PageHeader';

// Kitchen product styles/categories
const kitchenStyles = [
  {
    id: 'traditional',
    title: 'Traditional Kitchens',
    description: 'Timeless elegance with warm, inviting details and classic cabinet profiles.',
    image: 'https://ext.same-assets.com/3804481554/384484466.jpeg',
  },
  {
    id: 'contemporary',
    title: 'Contemporary Kitchens',
    description: 'Clean lines and sleek finishes that create a modern, sophisticated look.',
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
  {
    id: 'transitional',
    title: 'Transitional Kitchens',
    description: 'The perfect blend of traditional warmth and contemporary simplicity.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    description: 'Unique kitchen designs tailored to your specific vision and requirements.',
    image: 'https://ext.same-assets.com/3804481554/1177313443.jpeg',
  },
];

// Kitchen features
const kitchenFeatures = [
  {
    title: 'Premium Materials',
    description: 'Select from the finest hardwoods, exotic veneers, and specialty finishes.',
    icon: '🪵',
  },
  {
    title: 'Custom Cabinet Solutions',
    description: 'From pull-out organizers to specialized storage, everything is designed for your needs.',
    icon: '📦',
  },
  {
    title: 'Islands & Specialty Areas',
    description: 'Create stunning focal points with custom islands, bars, and entertainment centers.',
    icon: '🏝️',
  },
  {
    title: 'Integrated Appliances',
    description: 'Seamlessly incorporate appliances with custom panels and intelligent design.',
    icon: '🔌',
  },
  {
    title: 'Detailed Mouldings',
    description: 'Crown mouldings, light rails, and architectural details that elevate your space.',
    icon: '🏛️',
  },
  {
    title: 'Expert Installation',
    description: 'Professional installation by our team of experienced craftsmen.',
    icon: '🔨',
  },
];

// Project timeline steps
const timelineSteps = [
  {
    title: 'Initial Consultation',
    description: 'We\'ll discuss your vision, preferences, requirements, and budget.',
  },
  {
    title: 'Design Concept',
    description: 'Our designers create detailed plans and 3D renderings for your review.',
  },
  {
    title: 'Material Selection',
    description: 'Choose from our extensive selection of woods, finishes, and hardware.',
  },
  {
    title: 'Manufacturing',
    description: 'Your custom cabinetry is crafted with precision in our workshop.',
  },
  {
    title: 'Installation',
    description: 'Our skilled team installs your new kitchen with meticulous attention to detail.',
  },
  {
    title: 'Final Walkthrough',
    description: 'We ensure everything meets our exacting standards and your expectations.',
  },
];

export function KitchensPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Custom Kitchen Cabinetry"
        subtitle="Experience the perfect blend of beauty and functionality with our custom kitchen cabinetry, crafted to transform your space into the heart of your home."
      />

      {/* Kitchen Styles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Kitchen Styles</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                From traditional to contemporary, we design and craft custom kitchens in a variety of styles to match your aesthetic preferences and lifestyle.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitchenStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
              >
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/90 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2">{style.title}</h3>
                    <p className="text-alpine-tan-light mb-4">{style.description}</p>
                    <Link
                      to={`/products/custom-kitchens`}
                      className="inline-flex items-center text-white hover:text-alpine-tan transition-colors text-sm font-medium"
                    >
                      Learn more <FaArrowRight className="ml-1" size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-alpine-tan-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Kitchen Features</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Our custom kitchens combine thoughtful design with exceptional craftsmanship to create spaces that are both beautiful and functional.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenFeatures.map((feature, index) => (
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

      {/* Project Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Our Kitchen Design Process</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                We follow a collaborative, step-by-step approach to create your dream kitchen, ensuring every detail is perfected along the way.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-alpine-brown/20 transform md:translate-x-[-0.5px] hidden md:block"></div>

            {/* Timeline steps */}
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:order-2'}`}>
                    <div className={`max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="bg-alpine-tan-light p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-alpine-brown text-white flex items-center justify-center font-bold mr-3">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-alpine-brown-dark">{step.title}</h3>
                        </div>
                        <p className="text-alpine-gray-dark">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - visible on md screens */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-alpine-brown transform md:translate-x-[-50%] z-10 hidden md:block"></div>

                  {/* Spacer div for alternating layout */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase/Gallery Preview */}
      <section className="py-20 bg-alpine-tan-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Featured Kitchen Projects</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Browse through some of our recently completed kitchen projects showcasing our craftsmanship and attention to detail.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2 relative rounded-lg overflow-hidden aspect-square md:aspect-auto"
            >
              <img
                src="https://ext.same-assets.com/3804481554/384484466.jpeg"
                alt="Luxury Kitchen Feature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Luxury Lakeside Kitchen</h3>
                  <p className="text-alpine-tan-light">Modern traditional kitchen with custom island and butler's pantry</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-lg overflow-hidden aspect-square"
            >
              <img
                src="https://ext.same-assets.com/3804481554/621626395.jpeg"
                alt="Modern Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Contemporary Kitchen</h3>
                  <p className="text-alpine-tan-light">Clean lines with integrated appliances</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden aspect-square"
            >
              <img
                src="https://ext.same-assets.com/3804481554/3702909326.jpeg"
                alt="Rustic Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Traditional Elegance</h3>
                  <p className="text-alpine-tan-light">Classic styling with modern amenities</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-alpine-brown text-white py-3 px-6 rounded-md hover:bg-alpine-brown-dark transition-colors"
            >
              View Full Kitchen Gallery <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Kitchen?"
        description="Schedule a consultation with our design team to start creating your dream kitchen today."
        buttonText="Get Started"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/3702909326.jpeg"
      />
    </>
  );
}
