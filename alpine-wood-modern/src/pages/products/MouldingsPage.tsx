import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';

// Moulding categories
const mouldingCategories = [
  {
    id: 'crown',
    title: 'Crown Moulding',
    description: 'Elegant crown mouldings to provide a beautiful transition between walls and ceiling.',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
  {
    id: 'baseboards',
    title: 'Baseboards',
    description: 'Classic baseboards that provide a finished look at the junction of wall and floor.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
  {
    id: 'casing',
    title: 'Door & Window Casings',
    description: 'Custom casings that frame doors and windows with style and precision.',
    image: 'https://ext.same-assets.com/3804481554/1157441046.jpeg',
  },
  {
    id: 'chair-rail',
    title: 'Chair Rail & Wainscoting',
    description: 'Decorative elements that add character and protection to your walls.',
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
  {
    id: 'coffered',
    title: 'Coffered Ceiling Systems',
    description: 'Elegant coffered ceiling components to create architectural interest overhead.',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    id: 'corbels',
    title: 'Corbels & Brackets',
    description: 'Decorative support elements that add architectural interest and detail.',
    image: 'https://ext.same-assets.com/3804481554/3034254256.jpeg',
  },
];

// Moulding applications
const applications = [
  {
    title: 'Residential',
    description: 'Custom mouldings to enhance the beauty and value of your home.',
    bulletPoints: [
      'Complete interior trim packages',
      'Architectural accent pieces',
      'Period-specific reproductions',
      'Custom profiles to match existing mouldings',
    ],
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
  {
    title: 'Commercial',
    description: 'High-quality mouldings for commercial spaces that make a lasting impression.',
    bulletPoints: [
      'Custom millwork for hospitality spaces',
      'Durable trim for high-traffic areas',
      'Distinctive elements for retail environments',
      'Coordinated packages for office buildings',
    ],
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    title: 'Historic Reproduction',
    description: 'Precise reproductions of historic mouldings for restoration projects.',
    bulletPoints: [
      'Exact matching of period profiles',
      'Historically accurate details',
      'Custom knife grinding for unique profiles',
      'Consultation with preservation experts',
    ],
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
];

// Moulding styles
const styles = [
  {
    name: 'Traditional',
    description: 'Classic profiles with elegant details and timeless appeal.',
    image: 'https://ext.same-assets.com/3804481554/1157441046.jpeg',
  },
  {
    name: 'Contemporary',
    description: 'Clean lines and simple profiles for modern spaces.',
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
  {
    name: 'Craftsman',
    description: 'Straightforward designs with emphasis on natural materials and craftsmanship.',
    image: 'https://ext.same-assets.com/3804481554/3034254256.jpeg',
  },
  {
    name: 'Colonial',
    description: 'Historically inspired profiles with traditional American character.',
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
];

export function MouldingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-alpine-brown-dark pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://ext.same-assets.com/3804481554/1466535064.jpeg"
            alt="Custom Mouldings Background"
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
                Custom Mouldings
              </h1>
              <p className="text-xl text-alpine-tan-light mb-8 max-w-2xl">
                Exquisite architectural details that enhance your space with beauty and distinction, crafted with precision from the finest materials.
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
                  View Moulding Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Moulding Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Moulding Categories</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                We offer a wide range of custom moulding options to enhance any architectural style and complement your interior design.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mouldingCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-alpine-tan-light/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                    Request information <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-alpine-tan-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Moulding Applications</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Our custom mouldings are perfect for a variety of applications across residential, commercial, and historic preservation projects.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {applications.map((app, index) => (
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
                      src={app.image}
                      alt={app.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-alpine-brown-dark mb-4">{app.title}</h3>
                  <p className="text-alpine-gray-dark mb-6">{app.description}</p>
                  <ul className="space-y-3 mb-8">
                    {app.bulletPoints.map((point, idx) => (
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
                    Learn More <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Moulding Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Our Custom Moulding Process</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                From concept to installation, we ensure precision and quality at every step of the custom moulding process.
              </p>
            </motion.div>
          </div>

          <div className="relative py-8">
            {/* Timeline line */}
            <div className="absolute left-16 xs:left-24 md:left-1/2 top-0 bottom-0 w-0.5 bg-alpine-brown/20 transform md:translate-x-[-0.5px]"></div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row items-start mb-12"
            >
              <div className="flex-grow-0 flex-shrink-0 w-12 xs:w-20 h-12 xs:h-20 rounded-full bg-alpine-brown text-white flex items-center justify-center text-xl xs:text-2xl font-bold z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">1</div>

              <div className="md:w-1/2 md:pr-16 md:text-right md:mr-auto">
                <div className="bg-alpine-tan-light/30 p-6 rounded-lg shadow-md mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">Consultation & Design</h3>
                  <p className="text-alpine-gray-dark">We work with you to understand your vision, architectural style, and specific requirements, then develop detailed designs and specifications.</p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col md:flex-row items-start mb-12"
            >
              <div className="flex-grow-0 flex-shrink-0 w-12 xs:w-20 h-12 xs:h-20 rounded-full bg-alpine-brown text-white flex items-center justify-center text-xl xs:text-2xl font-bold z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">2</div>

              <div className="md:w-1/2"></div>

              <div className="md:w-1/2 md:pl-16">
                <div className="bg-alpine-tan-light/30 p-6 rounded-lg shadow-md mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">Custom Profile Creation</h3>
                  <p className="text-alpine-gray-dark">Our craftsmen create custom knives for your unique moulding profiles, ensuring precision and faithfulness to your design specifications.</p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-start mb-12"
            >
              <div className="flex-grow-0 flex-shrink-0 w-12 xs:w-20 h-12 xs:h-20 rounded-full bg-alpine-brown text-white flex items-center justify-center text-xl xs:text-2xl font-bold z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">3</div>

              <div className="md:w-1/2 md:pr-16 md:text-right md:mr-auto">
                <div className="bg-alpine-tan-light/30 p-6 rounded-lg shadow-md mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">Premium Material Selection</h3>
                  <p className="text-alpine-gray-dark">We select the finest hardwoods and materials for your mouldings, ensuring beauty, durability, and consistency throughout your project.</p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex flex-col md:flex-row items-start mb-12"
            >
              <div className="flex-grow-0 flex-shrink-0 w-12 xs:w-20 h-12 xs:h-20 rounded-full bg-alpine-brown text-white flex items-center justify-center text-xl xs:text-2xl font-bold z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">4</div>

              <div className="md:w-1/2"></div>

              <div className="md:w-1/2 md:pl-16">
                <div className="bg-alpine-tan-light/30 p-6 rounded-lg shadow-md mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">Precision Manufacturing</h3>
                  <p className="text-alpine-gray-dark">Using our state-of-the-art moulding equipment, we mill your custom profiles with exceptional precision and attention to detail.</p>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex flex-col md:flex-row items-start"
            >
              <div className="flex-grow-0 flex-shrink-0 w-12 xs:w-20 h-12 xs:h-20 rounded-full bg-alpine-brown text-white flex items-center justify-center text-xl xs:text-2xl font-bold z-10 mr-4 md:mr-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">5</div>

              <div className="md:w-1/2 md:pr-16 md:text-right md:mr-auto">
                <div className="bg-alpine-tan-light/30 p-6 rounded-lg shadow-md mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-alpine-brown-dark mb-3">Finishing & Installation</h3>
                  <p className="text-alpine-gray-dark">We apply premium finishes and provide expert installation services to ensure your custom mouldings are perfectly placed and beautifully finished.</p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Moulding Styles Section */}
      <section className="py-20 bg-alpine-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Moulding Styles</h2>
              <p className="text-lg text-alpine-tan-light max-w-3xl mx-auto">
                Our custom mouldings are available in a variety of styles to complement any architectural design and interior aesthetic.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styles.map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex bg-alpine-brown/50 rounded-lg overflow-hidden"
              >
                <div className="w-1/3">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-3">{style.name}</h3>
                  <p className="text-alpine-tan-light">{style.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Enhance Your Space with Custom Mouldings"
        description="From simple baseboards to elaborate coffered ceilings, our custom mouldings add architectural interest and value to any space."
        buttonText="Request a Quote"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/1466535064.jpeg"
      />
    </>
  );
}
