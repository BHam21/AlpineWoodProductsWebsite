import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { CTA } from '@/components/sections/CTA';

// Door styles
const doorStyles = [
  {
    id: 'traditional',
    title: 'Traditional Doors',
    description: 'Elegant designs with raised panels, detailed moldings, and classic proportions.',
    image: 'https://ext.same-assets.com/3804481554/1157441046.jpeg',
  },
  {
    id: 'contemporary',
    title: 'Contemporary Doors',
    description: 'Clean lines, minimal details, and modern materials for a sleek, sophisticated look.',
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
  {
    id: 'craftsman',
    title: 'Craftsman Doors',
    description: 'Characterized by straight lines, exposed joinery, and natural materials.',
    image: 'https://ext.same-assets.com/3804481554/3034254256.jpeg',
  },
  {
    id: 'rustic',
    title: 'Rustic Doors',
    description: 'Featuring distressed finishes, natural textures, and old-world charm.',
    image: 'https://ext.same-assets.com/3804481554/621626395.jpeg',
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    description: 'Completely bespoke doors tailored to your unique vision and specifications.',
    image: 'https://ext.same-assets.com/3804481554/3702909326.jpeg',
  },
];

// Door types
const doorTypes = [
  {
    title: 'Entry Doors',
    description: 'Make a statement with a custom-crafted front door that combines beauty, security, and durability.',
    features: [
      'Solid hardwood construction',
      'Weatherproof finishes',
      'Decorative glass options',
      'Custom hardware packages',
      'Matching sidelights and transoms',
    ],
    image: 'https://ext.same-assets.com/3804481554/1157441046.jpeg',
  },
  {
    title: 'Interior Doors',
    description: 'Enhance your interior spaces with doors that perfectly complement your home\'s style and décor.',
    features: [
      'Variety of panel designs',
      'Solid core or hollow core options',
      'Custom sizing for any opening',
      'Wide range of finishes',
      'Specialty options (pocket doors, barn doors)',
    ],
    image: 'https://ext.same-assets.com/3804481554/1466535064.jpeg',
  },
  {
    title: 'Commercial Doors',
    description: 'Durable, functional doors designed to meet the specific requirements of commercial spaces.',
    features: [
      'Fire-rated options available',
      'ADA compliant designs',
      'High-traffic durability',
      'Sound attenuation options',
      'Coordinated with architectural specifications',
    ],
    image: 'https://ext.same-assets.com/3804481554/2877275378.jpeg',
  },
];

// Wood species
const woodSpecies = [
  { name: 'Mahogany', color: 'bg-red-900', textColor: 'text-white' },
  { name: 'Cherry', color: 'bg-red-800', textColor: 'text-white' },
  { name: 'Walnut', color: 'bg-amber-950', textColor: 'text-white' },
  { name: 'Oak', color: 'bg-amber-700', textColor: 'text-white' },
  { name: 'Maple', color: 'bg-amber-200', textColor: 'text-alpine-brown-dark' },
  { name: 'Pine', color: 'bg-yellow-100', textColor: 'text-alpine-brown-dark' },
  { name: 'Alder', color: 'bg-amber-400', textColor: 'text-alpine-brown-dark' },
  { name: 'Hickory', color: 'bg-amber-600', textColor: 'text-white' },
  { name: 'Exotic Woods', color: 'bg-stone-700', textColor: 'text-white' },
];

export function DoorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-alpine-brown-dark pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://ext.same-assets.com/3804481554/1157441046.jpeg"
            alt="Architectural Door Background"
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
                Architectural Doors
              </h1>
              <p className="text-xl text-alpine-tan-light mb-8 max-w-2xl">
                Stunning entryways and interior doors that make a statement, crafted with old-world techniques and modern precision.
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
                  View Door Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Door Styles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Door Styles</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                From classic to contemporary, we craft custom doors in a variety of styles to complement your architecture and personal taste.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/90 to-transparent/30 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold mb-2">{style.title}</h3>
                      <p className="text-alpine-tan-light mb-4">{style.description}</p>
                      <Link
                        to={`/products/architectural-doors`}
                        className="inline-flex items-center text-white hover:text-alpine-tan transition-colors text-sm font-medium"
                      >
                        Learn more <FaArrowRight className="ml-1" size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Types Section */}
      <section className="py-20 bg-alpine-tan-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Door Applications</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Discover the perfect custom door solution for your specific needs, whether residential or commercial.
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {doorTypes.map((type, index) => (
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
                      src={type.image}
                      alt={type.title}
                      className="w-full aspect-video md:aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-alpine-brown-dark mb-4">{type.title}</h3>
                  <p className="text-alpine-gray-dark mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-alpine-brown mt-1 mr-3 flex-shrink-0" />
                        <span className="text-alpine-gray-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-alpine-brown text-white py-2 px-5 rounded-md hover:bg-alpine-brown-dark transition-colors"
                  >
                    Request Information <FaArrowRight className="ml-2" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-alpine-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional Craftsmanship</h2>
              <p className="text-lg text-alpine-tan-light max-w-3xl mx-auto">
                Our doors are meticulously crafted using traditional woodworking techniques and the finest materials to ensure beauty and longevity.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-alpine-brown/70 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Traditional Techniques</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Mortise & Tenon Joinery</h4>
                  <p className="text-alpine-tan-light">We use traditional mortise and tenon joinery, one of the strongest and most durable methods of connecting wood, to ensure lasting quality.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Hand-Selected Materials</h4>
                  <p className="text-alpine-tan-light">Each piece of wood is hand-selected for grain pattern, color, and stability to create doors of exceptional beauty and quality.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Expert Finishing</h4>
                  <p className="text-alpine-tan-light">Our master finishers apply multiple coats of premium finishes, with hand-sanding between each layer, for a flawless, durable result.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-alpine-brown/70 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Premium Materials</h3>
              <div>
                <h4 className="text-lg font-semibold mb-3">Available Wood Species</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {woodSpecies.map((wood, index) => (
                    <div
                      key={index}
                      className={`${wood.color} ${wood.textColor} px-3 py-2 rounded-md text-center`}
                    >
                      {wood.name}
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Hardware Options</h4>
                  <p className="text-alpine-tan-light">We offer a wide range of premium hardware options, from traditional to contemporary, to perfectly complement your custom door.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-brown-dark mb-4">Featured Door Projects</h2>
              <p className="text-lg text-alpine-gray-dark max-w-3xl mx-auto">
                Browse through some of our recent custom door installations across residential and commercial projects.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg overflow-hidden aspect-[3/4] md:aspect-auto md:row-span-2"
            >
              <img
                src="https://ext.same-assets.com/3804481554/1157441046.jpeg"
                alt="Grand Entryway"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Grand Entryway</h3>
                  <p className="text-alpine-tan-light">Custom mahogany entry door with sidelights</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-lg overflow-hidden aspect-square col-span-2 md:col-span-2 md:row-span-1"
            >
              <img
                src="https://ext.same-assets.com/3804481554/1466535064.jpeg"
                alt="Executive Office Doors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Executive Office Suite</h3>
                  <p className="text-alpine-tan-light">Custom walnut pocket doors for corporate headquarters</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden aspect-square md:col-span-2 md:row-span-1"
            >
              <img
                src="https://ext.same-assets.com/3804481554/3034254256.jpeg"
                alt="Rustic Doors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-brown-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Mountain Retreat</h3>
                  <p className="text-alpine-tan-light">Rustic knotty alder doors for a mountain home</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-alpine-brown text-white py-3 px-6 rounded-md hover:bg-alpine-brown-dark transition-colors"
            >
              View Full Door Gallery <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Make a Statement with Custom Doors"
        description="From grand entrances to elegant interiors, our custom doors add beauty and value to any space."
        buttonText="Start Your Project"
        buttonLink="/contact"
        image="https://ext.same-assets.com/3804481554/1157441046.jpeg"
      />
    </>
  );
}
